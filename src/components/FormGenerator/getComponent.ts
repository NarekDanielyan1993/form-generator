import CheckboxField from "@/components/ui/fields/CheckboxField.vue";
import InputField from "@/components/ui/fields/InputField.vue";
import SelectField from "@/components/ui/fields/SelectField.vue";
import TextareaField from "@/components/ui/fields/TextareaField.vue";
import type { FieldType } from "@/types/fields";

export const fieldComponentMap = {
  input: InputField,
  select: SelectField,
  checkbox: CheckboxField,
  textarea: TextareaField,
};

export function getComponent(fieldType: FieldType) {
  return fieldComponentMap[fieldType];
}
