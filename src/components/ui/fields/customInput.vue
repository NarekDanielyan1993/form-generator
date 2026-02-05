<template>
  <div class="field">
    <label class="field__label">
      {{ label }}
    </label>

    <input
      class="field__input"
      :class="{ 'field__input--error': errorMessage }"
      v-model="value"
      v-bind="attrs"
    />

    <span v-if="errorMessage" class="field__error">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import type { BaseField } from "@/types/fields";
import { useField } from "vee-validate";
import { useAttrs } from "vue";

const { name, label } = defineProps<BaseField>();

const attrs = useAttrs();

const { value, errorMessage } = useField(name);
</script>

<style scoped lang="scss">
@use "@/styles/_field";
</style>
