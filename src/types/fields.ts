import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "vue";

export type FieldType = "input" | "select" | "checkbox" | "textarea";

export interface BaseField {
  inputType: FieldType;
  name: string;
  label?: string;
}

export interface InputFieldProps
  extends Omit<InputHTMLAttributes, "name">, BaseField {}

export type SelectOption = { label: string; value: any };

export interface SelectFieldProps
  extends Omit<SelectHTMLAttributes, "name">, BaseField {
  options: SelectOption[];
}

export interface TextareaFieldProps
  extends Omit<TextareaHTMLAttributes, "name">, BaseField {}

export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes, "name">, BaseField {}

export type FormField =
  | InputFieldProps
  | SelectFieldProps
  | CheckboxFieldProps
  | TextareaFieldProps;
