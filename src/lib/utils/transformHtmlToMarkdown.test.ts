import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import transformHtmlToMarkdown from "./transformHtmlToMarkdown.ts";
Deno.test("transformHtmlToMarkdown", () => {
  assertEquals(
    transformHtmlToMarkdown(
      "<p>Cleansed Unit Lv.2</p><p>Potency +18%<br />Prevents knockback<br />Follow-up attack will occur up to 5 times when you hit an enemy (15 sec cooldown)</p>",
    ),
    "Cleansed Unit Lv.2\n\nPotency +18%\nPrevents knockback\nFollow-up attack will occur up to 5 times when you hit an enemy (15 sec cooldown)",
  );
});
