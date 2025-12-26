<template>
  <div class="field">
    <label v-if="label" :for="name" class="field__label">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      type="text"
      class="field__input"
      :class="{ 'field__input--error': error }"
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

const { value } = useField(props.name);
</script>

<style scoped lang="scss">
@use "@/styles/input";
</style>
