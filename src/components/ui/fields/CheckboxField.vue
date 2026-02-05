<template>
  <label class="checkbox">
    <input v-bind="attrs" type="checkbox" v-model="value" />
    {{ label }}
  </label>
  <ErrorMessage v-if="errorMessage" class="field__error">{{
    errorMessage
  }}</ErrorMessage>
</template>

<script setup lang="ts">
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import type { BaseField } from "@/types/fields";
import { useField } from "vee-validate";
import { useAttrs } from "vue";

const attrs = useAttrs();

const { name, label } = defineProps<BaseField>();

const { value, errorMessage } = useField(name);
</script>

<style scoped lang="scss">
@use "@/styles/checkbox";
</style>
