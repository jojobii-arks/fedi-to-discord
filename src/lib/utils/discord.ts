// Post content to Discord Webhook URL
export async function postToDiscordWebhook(
  webhookUrl: string,
  { content, name }: { content: string; name: string },
): Promise<void> {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  if (!response.ok) {
    throw new Error(
      `Could not post to Discord webhook: ${response.status} ${response.statusText}`,
    );
  }
}
