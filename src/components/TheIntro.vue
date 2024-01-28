<script setup lang='ts'>
import { ref } from 'vue';
import PillButton from '@/components/PillButton.vue';

const info = ref(
  {
    title: 'Hi, I\'m',
    name: 'Marco',
    role: 'Frontend',
    description: 'With a passion for creating beautiful and functional websites. I\'m a hard worker and a quick learner, and I\'m always looking for new opportunities to learn and grow as a developer.',
    image: '../assets/marcoprofile.jpg',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/marcop96',
        icon: 'carbon:logo-github'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marco-pianaroli96/',
        icon: 'carbon:logo-linkedin'
      }
    ]
  })
</script>

<template>
  <div class="flex  text-white justify-center items-center">
    <Icon icon="carbon:logo-linkedin" />
    <img src="../assets/marcoprofile.jpg" class="h-24 w-24 mx-2 rounded-full object-cover" />
    <div class="flex flex-col text-white justify-start">
      <p class="text-3xl">{{ info.title }} {{ info.name }}</p>
      <p class="text-3xl"> I'm a <span class="text-3xl text-blue-500"> {{ info.role }} </span> developer</p>

    </div>

  </div>
  <div class="flex flex-col text-white justify-center items-center">
    <span class="text-xl w-3xl p-3 ">{{ info.description }}</span>
    <div class="flex flex-row justify-center items-center">
      <PillButton v-for="link in info.links" :key="link.name" :icon="link.icon" :text="link.name" :url="link.url" />
    </div>
  </div>
</template>
