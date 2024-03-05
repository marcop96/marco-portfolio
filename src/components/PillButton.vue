<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  url: String,
  icon: String,
  styles: String,
});
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    :class="props.styles"
    class="p-2 text-white font-bold hover:opacity-80 transition-all"
  >
    <Icon :icon="props.icon as string" height="20px" width="20px" />
  </a>
</template>
