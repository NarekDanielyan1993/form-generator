import type { FormField } from "@/types/fields";

export const USER_FIELDS: FormField[] = [
  { name: "name", inputType: "input", label: "Name" },
  { name: "email", inputType: "input", label: "Email" },
  {
    name: "role",
    inputType: "select",
    label: "Role",
    options: [
      { label: "User", value: "user" },
      { label: "Admin", value: "admin" },
    ],
  },
  {
    name: "active",
    inputType: "checkbox",
    label: "Active user",
  },
];

export const PRODUCT_FIELDS: FormField[] = [
  { name: "title", inputType: "input", label: "Product Title" },
  { name: "price", inputType: "input", label: "Price" },
  {
    name: "description",
    inputType: "textarea",
    label: "Description",
  },
  {
    name: "category",
    inputType: "select",
    label: "Category",
    options: [
      { label: "Electronics", value: "electronics" },
      { label: "Clothing", value: "clothing" },
      { label: "Books", value: "books" },
    ],
  },
];
