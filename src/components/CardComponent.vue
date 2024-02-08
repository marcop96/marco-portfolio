<script setup lang='ts'>
import type { Project } from '@/types';

const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
})


</script>

<template></template>
