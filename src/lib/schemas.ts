import { z } from "zod";

export const CONTACT_SCHEMA = z.object({
  firstName: z.string().min(2, { message: "Please provide your first name" }).max(50),
  lastName: z.string().min(2, { message: "Please provide your last name" }).max(50),
  email: z.string().email().min(2, { message: "Please provide your email" }).max(255),
  message: z.string().min(5, { message: "Your special message must be longer than 5 characters." }),
});
