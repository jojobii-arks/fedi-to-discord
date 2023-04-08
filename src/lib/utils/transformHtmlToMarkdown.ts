import TurndownService from "turndown";

const turndownService = new TurndownService()
  // Make `br` tags into `"\n"`, not `" \n"` (which is the default)
  .addRule("br", {
    filter: ["br"],
    replacement: () => {
      return "\n";
    },
  });

export default function transformHtmlToMarkdown(html: string) {
  return turndownService.turndown(html);
}
