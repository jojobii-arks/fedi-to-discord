import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import transformHtmlToMarkdown from "./transformHtmlToMarkdown.ts";
Deno.test("transformHtmlToMarkdown", () => {
  assertEquals(
    transformHtmlToMarkdown("<p>foo</p>"),
    "foo",
  );
});
