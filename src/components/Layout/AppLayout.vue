<template>
  <div class="layout">
    <AppNav />

    <main class="layout__content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNav from "@/components/AppNav/AppNav.vue";
import { RouterView } from "vue-router";
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout__content {
  flex: 1;
}
</style>
