<script setup lang='ts'>
import PillButton from '@/components/PillButton.vue';
const projects = [{
  title: 'Ecommerce site',
  description: 'A frontend project made with VueJS to create a fully functional ecommerce site.',
  image: '../assets/portfolio.png',
  links: [
    {
      name: 'Github',
      url: "https://github.com/marcop96/vuecommerce",
      icon: 'carbon:logo-github'

    },
    {
      name: 'deploy',
      url: 'https://vuecommerce-nine.vercel.app/',
      icon: 'carbon:deploy'
    }
  ]
},
{
  title: 'Weather app',
  description: 'A frontend project made with VueJS to create a fully functional weather app.',
  image: '../assets/weatherapp.png',
  links: [
    {
      name: 'Github',
      url: "
    }]

</script>

<template>
  <div class=" flex text-white text-2xl">
    <PillButton styles="bg-black " icon="carbon:ibm-cloud-bare-metal-server" />
    Projects
  </div>
  <main class="grid  ">
    <div v-for="project in projects" :key="project.title" class="flex flex-col justify-center items-center">
      <img :src="project.image" class="h-96 w-96 object-cover rounded-lg" />
      <p class="text-2xl text-white">{{ project.title }}</p>
      <p class="text-xl text-white">{{ project.description }}</p>
      <div class="flex flex-row">

        <PillButton :url="project.links[0].url" :icon="project.links[0].icon" styles="bg-black" />
        <PillButton :url="project.links[1].url" :icon="project.links[1].icon" styles="bg-black" />

      </div>
    </div>

  </main>
</template>
