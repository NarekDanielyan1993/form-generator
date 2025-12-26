export type FieldType = "input" | "select" | "checkbox" | "textarea";

export interface BaseField {
  label?: string;
  error?: string;
  name: string;
  inputType: FieldType;
}

export interface InputFieldProps extends BaseField {
  placeholder?: string;
  disabled?: boolean;
}

export interface SelectFieldProps extends BaseField {
  options: { label: string; value: any }[];
  disabled?: boolean;
}

export interface TextareaFieldProps extends BaseField {
  placeholder?: string;
  disabled?: boolean;
}

export interface CheckboxFieldProps extends BaseField {}

export type FormField =
  | InputFieldProps
  | SelectFieldProps
  | CheckboxFieldProps
  | TextareaFieldProps;
