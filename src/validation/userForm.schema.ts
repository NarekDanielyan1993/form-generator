import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

export const userFormSchema = toTypedSchema(
  zod.object({
    name: zod.string().min(1, { message: "Name is required" }),

    email: zod
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),

    role: zod.string().min(1, { message: "Role is required" }),

    active: zod.boolean().optional(),
  })
);
