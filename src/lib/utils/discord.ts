import { EmbedBuilder, WebhookClient } from "discord";
import { webhook } from "../config.ts";

const webhookClient = new WebhookClient({
  url: webhook.url,
});

export async function postToDiscordWebhook(
  embeds: EmbedBuilder[],
) {
  try {
    await webhookClient.send({
      embeds,
    });
  } catch (e) {
    console.error("Error while posting to Discord webhook:", e);
  }
}
