<template>
  <nav class="nav">
    <RouterLink :to="ROUTES.USER_FORM">User Form</RouterLink>
    <RouterLink :to="ROUTES.PRODUCT_FORM">Product Form</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import ROUTES from "@/constants/routes";
</script>

<style scoped lang="scss">
@use "@/styles/_nav.scss";
</style>
