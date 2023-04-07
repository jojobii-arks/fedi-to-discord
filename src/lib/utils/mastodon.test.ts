import { StatusMastodon } from "./mastodon.ts";
import { assertInstanceOf } from "asserts";

const status_a: StatusMastodon = {
  "id": "110145703847710105",
  "created_at": "2023-04-05T10:21:01.152Z",
  "in_reply_to_id": null,
  "in_reply_to_account_id": null,
  "sensitive": false,
  "spoiler_text": "",
  "visibility": "public",
  "language": "en",
  "uri":
    "https://wetdry.world/users/WackyW0rkbench/statuses/110145703847710105",
  "url": "https://wetdry.world/@WackyW0rkbench/110145703847710105",
  "replies_count": 0,
  "reblogs_count": 0,
  "favourites_count": 0,
  "edited_at": null,
  "favourited": false,
  "reblogged": false,
  "muted": false,
  "bookmarked": false,
  "local_only": false,
  "content": "<p>Waking Up Before Bed</p>",
  "filtered": [],
  "reblog": null,
  "account": {
    "id": "109536532894426306",
    "username": "WackyW0rkbench",
    "acct": "WackyW0rkbench",
    "display_name": "Chip",
    "locked": false,
    "bot": false,
    "discoverable": null,
    "group": false,
    "created_at": "2022-12-18T00:00:00.000Z",
    "note": "",
    "url": "https://wetdry.world/@WackyW0rkbench",
    "avatar":
      "https://media.wetdry.world/accounts/avatars/109/536/532/894/426/306/original/12bf13a89f7fd6c0.png",
    "avatar_static":
      "https://media.wetdry.world/accounts/avatars/109/536/532/894/426/306/original/12bf13a89f7fd6c0.png",
    "header":
      "https://media.wetdry.world/accounts/headers/109/536/532/894/426/306/original/43bbc5e948f4a549.png",
    "header_static":
      "https://media.wetdry.world/accounts/headers/109/536/532/894/426/306/original/43bbc5e948f4a549.png",
    "followers_count": 4,
    "following_count": 5,
    "statuses_count": 9,
    "last_status_at": "2023-04-05",
    "noindex": false,
    "emojis": [],
    "roles": [],
    "fields": [
      {
        "name": "About",
        "value": "18 | Artist | Animator | Taken",
        "verified_at": null,
      },
    ],
  },
  "media_attachments": [
    {
      "id": "110145687453673693",
      "type": "image",
      "url":
        "https://media.wetdry.world/media_attachments/files/110/145/687/453/673/693/original/6d335b0dd5bae1a7.png",
      "preview_url":
        "https://media.wetdry.world/media_attachments/files/110/145/687/453/673/693/small/6d335b0dd5bae1a7.png",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 750,
          "height": 780,
          "size": "750x780",
          "aspect": 0.9615384615384616,
        },
        "small": {
          "width": 471,
          "height": 490,
          "size": "471x490",
          "aspect": 0.9612244897959183,
        },
      },
      "description": null,
      "blurhash": "UCAcuabHxYxY~Vfkoet5Rhf5f,WYRQxaRkM|",
    },
    {
      "id": "110145702519655061",
      "type": "image",
      "url":
        "https://media.wetdry.world/media_attachments/files/110/145/702/519/655/061/original/c1c19e58178b03e0.png",
      "preview_url":
        "https://media.wetdry.world/media_attachments/files/110/145/702/519/655/061/small/c1c19e58178b03e0.png",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 1536,
          "height": 908,
          "size": "1536x908",
          "aspect": 1.6916299559471366,
        },
        "small": {
          "width": 624,
          "height": 369,
          "size": "624x369",
          "aspect": 1.6910569105691058,
        },
      },
      "description": null,
      "blurhash": "UEAKy|RPDNj]qGyDQ-IAPVVsxva~HqV@t+%M",
    },
    {
      "id": "110145702773505408",
      "type": "image",
      "url":
        "https://media.wetdry.world/media_attachments/files/110/145/702/773/505/408/original/a40b846685a5e00a.png",
      "preview_url":
        "https://media.wetdry.world/media_attachments/files/110/145/702/773/505/408/small/a40b846685a5e00a.png",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 1536,
          "height": 1027,
          "size": "1536x1027",
          "aspect": 1.495618305744888,
        },
        "small": {
          "width": 586,
          "height": 392,
          "size": "586x392",
          "aspect": 1.4948979591836735,
        },
      },
      "description": null,
      "blurhash": "U4AdTsRi9jD%?w-:9EIWM_f5WBRjR;IVxW%M",
    },
    {
      "id": "110145703114387125",
      "type": "image",
      "url":
        "https://media.wetdry.world/media_attachments/files/110/145/703/114/387/125/original/4eac7a099e3f223e.png",
      "preview_url":
        "https://media.wetdry.world/media_attachments/files/110/145/703/114/387/125/small/4eac7a099e3f223e.png",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 1164,
          "height": 1536,
          "size": "1164x1536",
          "aspect": 0.7578125,
        },
        "small": {
          "width": 418,
          "height": 551,
          "size": "418x551",
          "aspect": 0.7586206896551724,
        },
      },
      "description": null,
      "blurhash": "U87A#@E4-Ms,0:=^ItR-==9#$#oJ5E=?I]a#",
    },
  ],
  "mentions": [],
  "tags": [],
  "emojis": [],
  "reactions": [],
  "card": null,
  "poll": null,
};

const status_b: StatusMastodon = {
  "id": "110153902206014478",
  "created_at": "2023-04-06T21:05:58.179Z",
  "in_reply_to_id": null,
  "in_reply_to_account_id": null,
  "sensitive": false,
  "spoiler_text": "",
  "visibility": "public",
  "language": "en",
  "uri": "https://botsin.space/users/ngstargetbot/statuses/110153902206014478",
  "url": "https://botsin.space/@ngstargetbot/110153902206014478",
  "replies_count": 0,
  "reblogs_count": 0,
  "favourites_count": 0,
  "edited_at": null,
  "content":
    "<p>Harukotan Devastators</p><p>Malevolent Granmizer<br />Malevolent Vardias<br />Malevolent Pangolan<br />Malevolent Ard Banser<br />Malevolent Volgbear</p>",
  "reblog": null,
  "application": {
    "name": "CheapBotsTootSweet",
    "website": null,
  },
  "account": {
    "id": "109815966467481665",
    "username": "ngstargetbot",
    "acct": "ngstargetbot",
    "display_name": "NGS Content BOT",
    "locked": false,
    "bot": true,
    "discoverable": false,
    "group": false,
    "created_at": "2023-02-06T00:00:00.000Z",
    "note":
      "<p>TRIAL START</p><p>Automated random toots twice per hour<br />Autoreplies to mentions/replies w/&quot;builds&quot;</p>",
    "url": "https://botsin.space/@ngstargetbot",
    "avatar":
      "https://files.botsin.space/accounts/avatars/109/815/966/467/481/665/original/aa0b33e3055080b3.png",
    "avatar_static":
      "https://files.botsin.space/accounts/avatars/109/815/966/467/481/665/original/aa0b33e3055080b3.png",
    "header":
      "https://files.botsin.space/accounts/headers/109/815/966/467/481/665/original/b53d72ec0b30c92a.jpg",
    "header_static":
      "https://files.botsin.space/accounts/headers/109/815/966/467/481/665/original/b53d72ec0b30c92a.jpg",
    "followers_count": 5,
    "following_count": 0,
    "statuses_count": 2727,
    "last_status_at": "2023-04-06",
    "noindex": true,
    "emojis": [],
    "roles": [],
    "fields": [],
  },
  "media_attachments": [],
  "mentions": [],
  "tags": [],
  "emojis": [],
  "card": null,
  "poll": null,
};

const status_c: StatusMastodon = {
  "id": "110158810328876463",
  "created_at": "2023-04-07T17:54:10.185Z",
  "in_reply_to_id": null,
  "in_reply_to_account_id": null,
  "sensitive": true,
  "spoiler_text": "",
  "visibility": "public",
  "language": "en",
  "uri": "https://wetdry.world/users/SwimmyLionni/statuses/110158810328876463",
  "url": "https://wetdry.world/@SwimmyLionni/110158810328876463",
  "replies_count": 0,
  "reblogs_count": 0,
  "favourites_count": 0,
  "edited_at": null,
  "favourited": false,
  "reblogged": false,
  "muted": false,
  "bookmarked": false,
  "local_only": false,
  "content":
    "<p>Note: Please do not eat tarantulas. Tarantulas are cool and you should let them live and do their tarantula thing.</p><p>(Marked as sensitive because big spider.)</p>",
  "filtered": [],
  "reblog": null,
  "account": {
    "id": "109376698444114018",
    "username": "SwimmyLionni",
    "acct": "SwimmyLionni",
    "display_name": "SwimmyLionni",
    "locked": false,
    "bot": false,
    "discoverable": true,
    "group": false,
    "created_at": "2022-11-20T00:00:00.000Z",
    "note":
      "<p>He/him. Expected content: video game magazine ads, obscure or weird video games, bad movies, linguistics rambling, Mary Worth, translation errors, various TILs. Also probably skeletons.</p>",
    "url": "https://wetdry.world/@SwimmyLionni",
    "avatar":
      "https://media.wetdry.world/accounts/avatars/109/376/698/444/114/018/original/dba1df98505e0ecd.png",
    "avatar_static":
      "https://media.wetdry.world/accounts/avatars/109/376/698/444/114/018/original/dba1df98505e0ecd.png",
    "header":
      "https://media.wetdry.world/accounts/headers/109/376/698/444/114/018/original/a3e5fe8141c03bd1.jpg",
    "header_static":
      "https://media.wetdry.world/accounts/headers/109/376/698/444/114/018/original/a3e5fe8141c03bd1.jpg",
    "followers_count": 9,
    "following_count": 8,
    "statuses_count": 129,
    "last_status_at": "2023-04-07",
    "noindex": false,
    "emojis": [],
    "roles": [],
    "fields": [],
  },
  "media_attachments": [
    {
      "id": "110158805956067358",
      "type": "image",
      "url":
        "https://media.wetdry.world/media_attachments/files/110/158/805/956/067/358/original/77e08798db2a36f9.jpg",
      "preview_url":
        "https://media.wetdry.world/media_attachments/files/110/158/805/956/067/358/small/77e08798db2a36f9.jpg",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 1235,
          "height": 1710,
          "size": "1235x1710",
          "aspect": 0.7222222222222222,
        },
        "small": {
          "width": 408,
          "height": 565,
          "size": "408x565",
          "aspect": 0.7221238938053097,
        },
      },
      "description": "",
      "blurhash": "UQQ9=vs;~qe:S2tR.8Rjt7M{ITt7t7t7R%j@",
    },
  ],
  "mentions": [],
  "tags": [],
  "emojis": [],
  "reactions": [],
  "card": null,
  "poll": null,
};

const status_d: StatusMastodon = {
  "id": "110154722737739806",
  "created_at": "2023-04-07T00:34:38.493Z",
  "in_reply_to_id": null,
  "in_reply_to_account_id": null,
  "sensitive": false,
  "spoiler_text": "",
  "visibility": "public",
  "language": "en",
  "uri": "https://botsin.space/users/ngstargetbot/statuses/110154722737739806",
  "url": "https://botsin.space/@ngstargetbot/110154722737739806",
  "replies_count": 0,
  "reblogs_count": 0,
  "favourites_count": 0,
  "edited_at": null,
  "content":
    "<p>Thank you for your feedback. Here is the response from our developers:</p><p>Excellent argument! However, you are currently using Pole Dance.</p>",
  "reblog": null,
  "application": {
    "name": "CheapBotsTootSweet",
    "website": null,
  },
  "account": {
    "id": "109815966467481665",
    "username": "ngstargetbot",
    "acct": "ngstargetbot",
    "display_name": "NGS Content BOT",
    "locked": false,
    "bot": true,
    "discoverable": false,
    "group": false,
    "created_at": "2023-02-06T00:00:00.000Z",
    "note":
      "<p>TRIAL START</p><p>Automated random toots twice per hour<br />Autoreplies to mentions/replies w/&quot;builds&quot;</p>",
    "url": "https://botsin.space/@ngstargetbot",
    "avatar":
      "https://files.botsin.space/accounts/avatars/109/815/966/467/481/665/original/aa0b33e3055080b3.png",
    "avatar_static":
      "https://files.botsin.space/accounts/avatars/109/815/966/467/481/665/original/aa0b33e3055080b3.png",
    "header":
      "https://files.botsin.space/accounts/headers/109/815/966/467/481/665/original/b53d72ec0b30c92a.jpg",
    "header_static":
      "https://files.botsin.space/accounts/headers/109/815/966/467/481/665/original/b53d72ec0b30c92a.jpg",
    "followers_count": 5,
    "following_count": 0,
    "statuses_count": 2772,
    "last_status_at": "2023-04-07",
    "noindex": true,
    "emojis": [],
    "roles": [],
    "fields": [],
  },
  "media_attachments": [
    {
      "id": "110154722713057237",
      "type": "image",
      "url":
        "https://files.botsin.space/media_attachments/files/110/154/722/713/057/237/original/eb479a02d6033c7c.png",
      "preview_url":
        "https://files.botsin.space/media_attachments/files/110/154/722/713/057/237/small/eb479a02d6033c7c.png",
      "remote_url": null,
      "preview_remote_url": null,
      "text_url": null,
      "meta": {
        "original": {
          "width": 1072,
          "height": 603,
          "size": "1072x603",
          "aspect": 1.7777777777777777,
        },
        "small": {
          "width": 640,
          "height": 360,
          "size": "640x360",
          "aspect": 1.7777777777777777,
        },
      },
      "description": null,
      "blurhash": "UWD9-h?bIUIo~q%gM{M{V?WBoeRk4-IUxus:",
    },
  ],
  "mentions": [],
  "tags": [],
  "emojis": [],
  "card": null,
  "poll": null,
};

import { transformMastodonPostToDiscordEmbeds } from "./mastodon.ts";
import { EmbedBuilder } from "discord";

Deno.test("transformMastodonPostToDiscordEmbeds generates EmbedBuilder objects", () => {
  const statuses = [status_a, status_b, status_c, status_d];
  statuses.forEach((status) => {
    const embeds = transformMastodonPostToDiscordEmbeds(status);
    embeds.forEach((e) => assertInstanceOf(e, EmbedBuilder));
  });
});
