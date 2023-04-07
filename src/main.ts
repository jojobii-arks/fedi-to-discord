import "./lib/clients/db.ts";
import { getLastPostId, upsertBridge } from "./lib/clients/db.ts";
import {
  getMostRecentPost,
  getPostsSincePostId,
  transformMastodonPostToDiscordEmbeds,
} from "./lib/utils/mastodon.ts";
import { postToDiscordWebhook } from "./lib/utils/discord.ts";
import { sleep } from "sleep";
import { bridges } from "./lib/config.ts";
const delaySeconds = 300;

// Fetch most recent post from each bridge.
console.log("Fetching most recent posts...");
await Promise.all(
  bridges.map(
    async ({ name, host, user_id }) => {
      const post = await getMostRecentPost({ host, user_id });
      console.log(`Latest post from ${name}:`, {
        postId: post.postId,
        url: post.url,
      });
      const lastPostId = getLastPostId(name);
      if (lastPostId === post.postId) {
        console.log(`No new posts from ${name}, skipping...`);
        return;
      }
      upsertBridge(name, post.postId);
      postToDiscordWebhook(transformMastodonPostToDiscordEmbeds(post.raw));
      return;
    },
  ),
);
async function checkForNewPosts() {
  console.log("Checking for new posts...");
  await Promise.all(
    bridges.map(
      async ({ name, host, user_id }) => {
        const lastPostId = getLastPostId(name);
        if (typeof lastPostId !== "string") {
          throw new Error(
            "This should've been initialized to a string value.... Ending program now.",
          );
        }

        try {
          const posts = await getPostsSincePostId({
            host,
            user_id,
            postId: lastPostId,
          });
          if (posts.length === 0) {
            console.log(`No new posts from ${name}, skipping...`);
            return;
          }
          console.log(
            `New posts from ${name}:`,
            posts.map((post) => (
              { postId: post.postId, url: post.url }
            )),
          );
          posts.forEach((post) => {
            console.log("Posting to Discord:", post.url);
            postToDiscordWebhook(
              transformMastodonPostToDiscordEmbeds(post.raw),
            );
          });
          upsertBridge(name, posts[0].postId);
          return;
        } catch (e) {
          console.log("Error while checking for new posts:", e);
        }
      },
    ),
  );
}

// Run eternally.
while (true) {
  // Delay for specified amount before running again.
  await sleep(delaySeconds);
  await checkForNewPosts();
}
