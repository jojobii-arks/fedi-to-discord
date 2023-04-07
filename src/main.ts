import "./lib/clients/db.ts";
import { getLastPostId, upsertBridge } from "./lib/clients/db.ts";
import { parse as parseYaml } from "yaml";
import { ConfigSchema } from "./lib/schemas.ts";
import { colors } from "colors";
import {
  getMostRecentPost,
  getPostsSincePostId,
} from "./lib/utils/mastodon.ts";
import { postToDiscordWebhook } from "./lib/utils/discord.ts";
import { sleep } from "sleep";
const delaySeconds = 300;

// read config
function readConfig() {
  try {
    Deno.readTextFileSync("config.yml");
  } catch {
    console.log(colors.bold.red("\nUnable to find `config.yml`..."));
    console.log(
      colors.italic("Please put a `config.yml` file in the root folder.\n"),
    );
    throw new Error("Could not find config.yml");
  }

  try {
    return ConfigSchema.parse(parseYaml(Deno.readTextFileSync("config.yml")));
  } catch {
    console.log(colors.bold.red("\nUnable to parse `config.yml`..."));
    console.log(
      colors.italic(
        "Please view the example, `config.example.yml`, in the repository.\n",
      ),
    );
    throw new Error("Could not parse config.yml");
  }
}

const config = readConfig();
console.log(colors.bold.cyan("\nUsing Config:\n"));
console.log(config, "\n");

const { bridges, webhook: { url } } = config;

// Fetch most recent post from each bridge.
console.log("Fetching most recent posts...");
await Promise.all(
  bridges.map(
    async ({ name, host, user_id }) => {
      const post = await getMostRecentPost({ host, user_id });
      console.log(`Latest post from ${name}:`, post);
      const lastPostId = getLastPostId(name);
      if (lastPostId === post.postId) {
        console.log(`No new posts from ${name}, skipping...`);
        return;
      }
      upsertBridge(name, post.postId);
      postToDiscordWebhook(url, { content: post.url, name });
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
        const posts = await getPostsSincePostId({
          host,
          user_id,
          postId: lastPostId,
        });
        if (posts.length === 0) {
          console.log(`No new posts from ${name}, skipping...`);
          return;
        }
        console.log(`New posts from ${name}:`, posts);
        posts.forEach((post) => {
          console.log("Posting to Discord:", post.url);
          postToDiscordWebhook(url, { content: post.url, name });
        });
        upsertBridge(name, posts[0].postId);
        return;
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
