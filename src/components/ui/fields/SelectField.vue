<template>
  <div class="field">
    <label :for="label" class="field__label">{{ label }}</label>
    <select v-bind="attrs" :id="label" class="field__select" v-model="value">
      <option v-for="o in options" :key="o.value" :value="o.value">
        {{ o.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { BaseField, SelectFieldProps } from "@/types/fields";
import { useField } from "vee-validate";
import { useAttrs } from "vue";

const { options: opts, ...attrs } = useAttrs();

const props = defineProps<BaseField>();
const options = opts as SelectFieldProps["options"];

const { value } = useField(props.name);
</script>

<style scoped lang="scss">
@use "@/styles/select";
</style>
