<template>
  <nav class="nav">
    <RouterLink :to="ROUTES.USER_FORM">User Form</RouterLink>
    <RouterLink :to="ROUTES.PRODUCT_FORM">Product Form</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import ROUTES from "@/constants/routes";
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
@use "@/styles/_nav.scss";
</style>
