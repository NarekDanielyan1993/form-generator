<template>
  <form class="form" @submit.prevent="onSubmit">
    <div v-for="field in fields" :key="field.name">
      <slot
        v-if="$slots[`field-${field.name}`]"
        :name="`field-${field.name}`"
        v-bind="field"
        :inputType="field.inputType"
        :error="errors[field.name]"
      />

      <component
        v-else
        :is="getComponent(field.inputType)"
        v-bind="field"
        :inputType="field.inputType"
        :error="errors[field.name]"
        :name="field.name"
      />
    </div>

    <div class="form__actions">
      <BaseButton type="submit" :disabled="!meta.valid || !meta.dirty"
        >Save</BaseButton
      >
      <BaseButton type="button" variant="secondary" @click="onCancel">
        Cancel
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { getComponent } from "@/components/FormGenerator/getComponent";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useFormGenerator } from "@/composables/useFormGenerator";
import type { FormField } from "@/types/fields";
import type { TypedSchema } from "vee-validate";

const model = defineModel<Record<string, any>>({
  default: () => ({}),
});

const props = defineProps<{
  fields: FormField[];
  validationSchema?: TypedSchema;
}>();

const emit = defineEmits(["submit", "cancel"]);

const { handleSubmit, errors, resetForm, meta } = useFormGenerator({
  validationSchema: props.validationSchema,
  initialValues: model,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});

const onCancel = () => {
  resetForm({
    errors: {},
    submitCount: 0,
    touched: {},
  });
  emit("cancel");
};
</script>

<style scoped lang="scss">
@use "@/styles/form";
</style>
