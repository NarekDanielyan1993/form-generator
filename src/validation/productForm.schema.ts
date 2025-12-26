import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

export const productFormSchema = toTypedSchema(
  zod.object({
    title: zod.string().min(1, "Title is required"),
    price: zod.coerce
      .number({ error: "Price must be a number" })
      .min(1, "Price is required"),
    category: zod.string().min(1, "Category is required"),
    description: zod.string().optional(),
  })
);
