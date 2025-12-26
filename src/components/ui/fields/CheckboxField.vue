<template>
  <label class="checkbox">
    <input v-bind="attrs" type="checkbox" v-model="value" />
    {{ label }}
  </label>
  <ErrorMessage v-if="error" class="field__error">{{ error }}</ErrorMessage>
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
@use "@/styles/checkbox";
</style>
