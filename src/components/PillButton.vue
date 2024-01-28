<script setup lang='ts'>
import { Icon } from '@iconify/vue';

const props = defineProps({
  text: String,
  url: String,
  icon: String
})

</script>

<template>
  <div class="p-3 mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
    <a :href=props.url target="_blank">
      <Icon :icon="props.icon as string" height="20px" width="20px" />

    </a>

  </div>
</template>
