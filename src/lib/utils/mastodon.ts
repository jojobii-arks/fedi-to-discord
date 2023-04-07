import { Status } from "../types.ts";

export type StatusMastodon = {
  id: string;
  created_at: string;
  in_reply_to_id: string;
  in_reply_to_account_id: string;
  sensitive: boolean;
  spoiler_text: string;
  visibility: string;
  language: string;
  uri: string;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  // deno-lint-ignore no-explicit-any
  edited_at: any;
  local_only: boolean;
  content: string;
  // deno-lint-ignore no-explicit-any
  reblog: any;
  account: {
    id: string;
    username: string;
    acct: string;
    display_name: string;
    locked: boolean;
    bot: boolean;
    discoverable: boolean;
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
    // deno-lint-ignore no-explicit-any
    emojis: Array<any>;
    // deno-lint-ignore no-explicit-any
    roles: Array<any>;
    fields: Array<{
      name: string;
      value: string;
      // deno-lint-ignore no-explicit-any
      verified_at: any;
    }>;
  };
  // deno-lint-ignore no-explicit-any
  media_attachments: Array<any>;
  mentions: Array<{
    id: string;
    username: string;
    url: string;
    acct: string;
  }>;
  // deno-lint-ignore no-explicit-any
  tags: Array<any>;
  // deno-lint-ignore no-explicit-any
  emojis: Array<any>;
  // deno-lint-ignore no-explicit-any
  reactions: Array<any>;
  // deno-lint-ignore no-explicit-any
  card: any;
  // deno-lint-ignore no-explicit-any
  poll: any;
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
  }));
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
