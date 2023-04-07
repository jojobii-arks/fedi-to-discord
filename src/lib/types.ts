import { StatusMastodon } from "./utils/mastodon.ts";

export type Status = {
  postId: string;
  url: string;
  raw: StatusMastodon;
};
