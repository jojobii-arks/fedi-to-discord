import { parse as parseYaml } from "yaml";
import { colors } from "colors";
import { z } from "zod";

export const ConfigSchema = z.object({
  webhook: z.object({
    urls: z.array(z.string()),
    icon_url: z.string().default(
      "https://gitlab.com/ayush-sharma/to-the-fediverse/-/raw/master/static/images/icon.png",
    ),
  }),
  bridges: z.array(
    z.object({
      name: z.string(),
      host: z.string(),
      user_id: z.string(),
    }),
  ),
});

export type Config = z.infer<typeof ConfigSchema>;
// read config
function readConfig() {
  try {
    Deno.readTextFileSync("config.yml");
  } catch {
    console.log(colors.bold.red("\nUnable to find `config.yml`..."));
    console.log(
      colors.italic("Please put a `config.yml` file in the root folder.\n"),
    );
    throw new Error("Could not find config.yml");
  }

  try {
    return ConfigSchema.parse(parseYaml(Deno.readTextFileSync("config.yml")));
  } catch {
    console.log(colors.bold.red("\nUnable to parse `config.yml`..."));
    console.log(
      colors.italic(
        "Please view the example, `config.example.yml`, in the repository.\n",
      ),
    );
    throw new Error("Could not parse config.yml");
  }
}

const config = readConfig();
console.log(colors.bold.cyan("\nUsing Config:\n"));
console.log(config, "\n");

export default config;
export const bridges = config.bridges;
export const webhook = config.webhook;
