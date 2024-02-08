<script setup lang='ts'>
import type { Project } from '@/types';
import PillButton from '@/components/PillButton.vue';

defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
})


</script>

<template>
  <main class=" flex h-fit w-1/2 justify-center mx-auto my-2 p-2  bg-gray rounded-lg shadow
  shadow-sm shadow-black">

    <img :src="project.image" class=" h-64 w-64 object-cover rounded-lg" />

    <div class="flex flex-col justify-center w-full">
      <p class="text-2xl w-fit ">{{ project.title }}</p>
      <div class="flex space-x-2 justify-center w-fit">
        <PillButton v-for="technology in project.technologies" :key="technology" :icon="technology"
          styles="bg-white rounded-full  " />
      </div>
      <p class=" my-2  max-w-96  overscroll-auto">{{ project.description }}</p>


      <div class="flex justify-end ">
        <PillButton v-for="link in project.links" :key="link.name" :url="link.url" :icon="link.icon"
          styles="bg-white text-black  h-fit align-bottom rounded-xl mx-1 w-fit hover:bg-dark hover:text-white " />
      </div>
    </div>
  </main>
</template>
