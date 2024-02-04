<script setup lang='ts'>
import PillButton from '@/components/PillButton.vue';
import type { Project } from '@/types';

const projects: Project[] = [{
  title: 'Ecommerce site',
  description: 'A frontend project made with VueJS to create a fully functional ecommerce site.',
  image: '@/assets/img/vuecommerce-img.png',
  technologies: ['Vue', 'Tailwind', 'Vercel'],
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
  title: 'FutbOrg',
  description: 'Football organization project with a google sheets backend to manage teams, matches and players.',
  image: '@/assets/futborg-img.png',
  technologies: ['Vue', 'Tailwind', 'Google sheets'],
  links: [
    {
      name: 'Github',
      url: "https://www.github.com/",
      icon: 'carbon:logo-github'
    },
    {
      name: 'deploy',
      url: 'https://vuecommerce-nine.vercel.app/',
      icon: 'carbon:deploy'
    }]
},
{
  title: 'Expense tracker app',
  description: 'An app made with React to track expenses and income. It uses local storage to save the data.',
  image: '@/assets/expense-tracker-img.png',
  technologies: ['React', 'Tailwind', 'Local storage'],
  links: [
    {
      name: 'Github',
      url: "https://www.github.com/",
      icon: 'carbon:logo-github'
    },
    {
      name: 'deploy',
      url: 'https://expense-tracker-neon-kappa.vercel.app/',
      icon: 'carbon:deploy'
    }]
}]

for (let i = 0; i < projects.length; i++) {
  console.log((projects[i].image))
}
</script>

<template>
  <div class="flex  justify-center text-white align-mid mt-20 ">
    <PillButton styles="bg-black" icon="carbon:ibm-cloud-bare-metal-server" />
    <p class="text-3xl">Projects</p>
  </div>
  <!-- <div class="flex  flex-wrap text-white ">
    <div v-for="project in projects" :key="project.title"
      class="m-4 p-4 bg-blue-500 rounded-lg w-full max-w-sm flex flex-col items-center">
      <img :src="project.image" class="h-32 w-full object-cover rounded-lg" />
      <div class="flex flex-col items-center w-full">
        <p class="text-2xl my-2">{{ project.title }}</p>
        <p class="text-xl my-2 text-center">{{ project.description }}</p>
        <div class="flex justify-center space-x-4 mt-4">
          <PillButton :url="project.links[0].url" :icon="project.links[0].icon" styles="bg-black" />
          <PillButton :url="project.links[1].url" :icon="project.links[1].icon" styles="bg-black" />
        </div>
      </div>
    </div>
  </div> -->
  <!-- photo at the left, title, icons displaying technologies used under title description under icons, github and repository icons under everything -->
  <div v-for="project in projects" :key="project.title" class="flex m-4 p-4 bg-gray rounded-lg ">
    <img :src="project.image" class=" h-64 w-64 object-cover rounded-lg" />
    <div class="flex flex-col  w-full">
      <p class="text-2xl w-fit">{{ project.title }}</p>
      <p class=" my-2 text-center max-w-96 overscroll-auto">{{ project.description }}</p>

      <div class="flex  space-x-4 mt-4">
        <PillButton :url="project.links[0].url" :icon="project.links[0].icon" styles="bg-black" />
        <PillButton :url="project.links[1].url" :icon="project.links[1].icon" styles="bg-black" />
      </div>
    </div>
  </div>
</template>

