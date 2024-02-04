<script setup lang='ts'>
import PillButton from '@/components/PillButton.vue';
import type { Project } from '@/types';

const projects: Project[] = [{
  title: 'Ecommerce site',
  description: 'A frontend project made with VueJS to create a fully functional ecommerce site.',
  image: '@/assets/img/vuecommerce-img.png',
  technologies: ['devicon:vuejs', 'devicon:tailwindcss', 'devicon:vercel'],
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
  technologies: ['devicon:vuejs', 'devicon:googlecloud'],
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
  technologies: ['devicon:react', 'devicon:tailwindcss'],
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

  <div v-for="project in  projects " :key="project.title" class="flex m-4 p-4 bg-gray rounded-lg shadow
  shadow-sm shadow-black ">
    <img :src="project.image" class=" h-64 w-64 object-cover rounded-lg" />

    <div class="flex flex-col justify-center w-full">
      <p class="text-2xl w-fit ">{{ project.title }}</p>
      <div class="flex space-x-2 justify-center w-fit">
        <PillButton v-for="technology in project.technologies" :key="technology" :icon="technology"
          styles="bg-white rounded-xl hover:bg-dark hover:text-white " />
      </div>
      <p class=" my-2  max-w-96  overscroll-auto">{{ project.description }}</p>


      <div class="flex justify-end ">
        <PillButton v-for="link in project.links" :key="link.name" :url="link.url" :icon="link.icon"
          styles="bg-white text-black  h-fit align-bottom rounded-xl mx-1 w-fit hover:bg-dark hover:text-white " />
      </div>
    </div>

  </div>
</template>

