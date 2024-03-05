<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="flex flex-col justify-center bg-[#030637]">
    <TheHeader />

    <RouterView />
  </div>
</template>
