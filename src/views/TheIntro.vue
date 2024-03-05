<script setup lang='ts'>
import { ref } from 'vue'

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
        icon: 'carbon:logo-github',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marco-pianaroli96/',
        icon: 'carbon:logo-linkedin',
      },
    ],
  },
)
</script>

<template>
  <div class="flex flex-col justify-center text-white  mt-20 ">
    <Icon icon="carbon:logo-linkedin" />
    <img src="../assets/marcoprofile.jpg" class="h-24 w-24 mx-2 self-center rounded-full object-cover" />
    <div class="flex flex-col text-white justify-start items-center">
      <p class="text-6xl">{{ info.title }} {{ info.name }}</p>
      <p class="text-5xl"><span class="text-5xl text-[#910A67]"> {{ info.role }} </span> developer</p>
    </div>
  </div>
</template>
