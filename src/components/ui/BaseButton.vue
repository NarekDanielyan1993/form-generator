<template>
  <button v-bind="$attrs" class="btn" :class="`btn--${variant || 'primary'}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ variant?: "primary" | "secondary" }>();
</script>

<style scoped lang="scss">
@use "@/styles/button";
</style>
