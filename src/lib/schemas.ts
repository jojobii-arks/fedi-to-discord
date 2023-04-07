import { z } from "zod";

export const ConfigSchema = z.object({
  webhook: z.object({
    url: z.string(),
  }),
  bridges: z.array(
    z.object({
      name: z.string(),
      host: z.string(),
      user_id: z.string(),
    }))
});

export type Config = z.infer<typeof ConfigSchema>;