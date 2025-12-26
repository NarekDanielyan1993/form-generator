<template>
  <div class="field">
    <label class="field__label">
      {{ label }}
    </label>

    <input
      class="field__input"
      :class="{ 'field__input--error': error }"
      v-model="value"
      :placeholder="placeholder"
    />

    <span v-if="error" class="field__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps<{
  label?: string;
  error?: string;
  name: string;
  placeholder?: string;
}>();

const { value } = useField(props.name);
</script>

<style scoped lang="scss">
@use "@/styles/_field";
</style>
