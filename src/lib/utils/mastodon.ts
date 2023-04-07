// deno-lint-ignore-file no-explicit-any
import { Status } from "../types.ts";
import { EmbedBuilder } from "discord";
import transformHtmlToMarkdown from "./transformHtmlToMarkdown.ts";
import config from "../config.ts";

export type StatusMastodon = {
  id: string;
  created_at: string;
  url: string;
  content: string;
  account: {
    id: string;
    username: string;
    acct: string;
    display_name: string;
    locked: boolean;
    bot: boolean;
    discoverable: any;
    group: boolean;
    created_at: string;
    note: string;
    url: string;
    avatar: string;
    avatar_static: string;
    header: string;
    header_static: string;
    followers_count: number;
    following_count: number;
    statuses_count: number;
    last_status_at: string;
    noindex: boolean;
    emojis: Array<any>;
    roles: Array<any>;
    fields: Array<{
      name: string;
      value: string;
      verified_at: any;
    }>;
  };
  media_attachments: Array<{
    id: string;
    type: string;
    url: string;
    preview_url: string;
    remote_url: any;
    preview_remote_url: any;
    text_url: any;
    meta: {
      original: {
        width: number;
        height: number;
        size: string;
        aspect: number;
      };
      small: {
        width: number;
        height: number;
        size: string;
        aspect: number;
      };
    };
    description: any;
    blurhash: string;
  }>;
  mentions: Array<any>;
  [key: string]: any;
};

export async function getMostRecentPost(
  { host, user_id }: { host: string; user_id: string },
): Promise<Status> {
  const url = new URL(`https://${host}/api/v1/accounts/${user_id}/statuses`);
  url.search = new URLSearchParams(
    { limit: "1", exclude_replies: "true", exclude_reblogs: "true" },
  ).toString();
  const response = await fetch(url.toString());
  const json = await response.json();
  if (!json || !(json instanceof Array) || !json[0]) {
    throw new Error(
      `Could not fetch most recent post for ${user_id} on ${host}`,
    );
  }
  const recentPost = json[0] as StatusMastodon;
  return {
    postId: recentPost.id,
    url: recentPost.url,
    raw: recentPost,
  };
}

/**
 * Get all posts since the given post ID. Array is sorted from newest to oldest.
 */
export async function getPostsSincePostId(
  { host, user_id, postId }: { host: string; user_id: string; postId: string },
): Promise<Status[]> {
  const url = new URL(`https://${host}/api/v1/accounts/${user_id}/statuses`);
  // Hope that the limit is enough to get all posts since the last one.
  url.search = new URLSearchParams({
    limit: "20",
    exclude_replies: "true",
    exclude_reblogs: "true",
    since_id: postId,
  })
    .toString();
  const response = await fetch(url.toString());
  const json = await response.json();
  if (!json || !(json instanceof Array)) {
    throw new Error(
      `Could not fetch posts since ${postId} for ${user_id} on ${host}`,
    );
  }
  const posts = json as StatusMastodon[];

  return posts.map((post) => ({
    postId: post.id,
    url: post.url,
    raw: post,
  }));
}

/**
 * Transform a Mastodon post to an array of Discord embeds.
 */
export function transformMastodonPostToDiscordEmbeds(post: StatusMastodon) {
  // Get instance host of post.
  const host = new URL(post.url).hostname;

  // Create first embed containing all metadata of post.
  const mainEmbed = new EmbedBuilder()
    .setTitle(post.account.display_name)
    .setURL(post.url)
    .setAuthor({
      name: "@" + post.account.username + "@" + host,
      url: post.account.url,
      iconURL: post.account.avatar,
    })
    .setDescription(transformHtmlToMarkdown(post.content))
    .setTimestamp(new Date(post.created_at))
    .setFooter({
      text: new URL(post.url).hostname,
      iconURL: config.webhook.icon_url,
    });

  // Initialzie new array for other embeds.
  const restEmbeds = [];

  // If there are media attachments, add them to the embeds.
  if (post.media_attachments.length > 0) {
    // First attachment is added to the main embed.
    const [firstAttachment, ...restAttachments] = post.media_attachments;
    mainEmbed.setImage(firstAttachment.url);

    // Add the rest of the attachments as new embeds.
    if (restAttachments.length > 0) {
      restEmbeds.push(...restAttachments.map((attachment) => {
        const embed = new EmbedBuilder()
          .setURL(post.url)
          .setImage(attachment.url);
        return embed;
      }));
    }
  }

  // Return array of embeds.
  return [mainEmbed, ...restEmbeds];
}

/** Import to test... */
if (import.meta.main) {
  console.log(
    await getPostsSincePostId({
      host: "wetdry.world",
      user_id: "109318474720838990",
      postId: "110154241654804977",
    }),
  );
}
