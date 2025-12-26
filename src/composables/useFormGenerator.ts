import type PartialDeep from "vee-validate";
import { useForm, type TypedSchema } from "vee-validate";

interface UseFormGeneratorOptions<T extends Record<string, any>> {
  initialValues: { value: T };
  validationSchema?: TypedSchema<T, T>;
}

export function useFormGenerator<T extends Record<string, any>>(
  options: UseFormGeneratorOptions<T>
) {
  const { initialValues, validationSchema } = options;

  const formData = useForm<T>({
    validationSchema,
    initialValues: initialValues as PartialDeep<T>,
    validateOnMount: false,
    keepValuesOnUnmount: false,
  });

  return formData;
}
