<template>
  <div class="field">
    <label :for="label" class="field__label">{{ label }}</label>
    <textarea
      :id="label"
      :class="{ 'field__textarea--error': error }"
      class="field__textarea"
      v-bind="attrs"
      v-model="value"
    />
    <ErrorMessage v-if="error" class="field__error">{{ error }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import type { BaseField } from "@/types/fields";
import { useField } from "vee-validate";
import { useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps<BaseField>();

const { value } = useField<string>(props.name);
</script>

<style scoped lang="scss">
@use "@/styles/textarea";
</style>
