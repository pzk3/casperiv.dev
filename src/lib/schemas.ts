import { z } from "zod";

export const CONTACT_SCHEMA = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email().min(2).max(255),
  message: z.string().min(5),
});
