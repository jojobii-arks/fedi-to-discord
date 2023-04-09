import { EmbedBuilder, WebhookClient } from "discord";
import { webhook } from "../config.ts";

export async function postToDiscordWebhooks(
  embeds: EmbedBuilder[],
) {
  await Promise.all((webhook.urls).map(async (url) => {
    const webhookClient = new WebhookClient({ url });
    try {
      await webhookClient.send({
        embeds,
      });
    } catch (e) {
      console.error("Error while posting to Discord webhook:", e);
    }
  }));
}
