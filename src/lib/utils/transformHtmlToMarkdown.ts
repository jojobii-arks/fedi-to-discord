import TurndownService from "turndown";

const turndownService = new TurndownService();

export default function transformHtmlToMarkdown(html: string) {
  return turndownService.turndown(html);
}
