<script setup lang='ts'>
import PillButton from '@/components/PillButton.vue';
import type { Project } from '@/types';
import CardComponent from '@/components/CardComponent.vue';

const projects: Project[] = [{
  title: 'Ecommerce site',
  description: 'A frontend project made with VueJS to create a fully functional ecommerce site.',
  image: './assets/vuecommerce-img.png',
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
}
]

</script>

<template>
  <div class="flex h-fit justify-center text-white mt-15 ">
    <PillButton styles="bg-black" icon="carbon:ibm-cloud-bare-metal-server" />
    <p class="text-3xl">Projects</p>
  </div>

  <CardComponent v-for="project in  projects " :key="project.title" :project="project" />
</template>

