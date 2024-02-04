<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheIntro from '@/components/TheIntro.vue';
import TheProjects from '@/components/TheProjects.vue';
</script>

<template>
  <div class="flex flex-col justify-center bg-black">
    <TheHeader />
    <div class="flex flex-col items-center justify-center  bg-black  ">
      <!-- <TheIntro /> -->

      <TheProjects />
    </div>
  </div>
</template>
