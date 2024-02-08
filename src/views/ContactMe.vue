<script setup lang='ts'>
import PillButton from '@/components/PillButton.vue';



const contactMeText = {
  introduction: "I'm always open to discussing web development work or partnership opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.",
  buildTogether: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'd be more than happy to discuss your project ideas or provide information about my skills and experience.",
  email: "pianarolimarco@gmail.com",
  linkedIn: "https://www.linkedin.com/in/marco-pianaroli96/",
  gitHub: "https://www.github.com/marcop96",
  availability: "open for opportunities"
};

</script>

<template>
  z <main class="text-white flex flex-col justify-center mt-2 w-1/2 mx-auto h-100vh align-top ">


    <h1 class="text-3xl">Contact Me</h1>
    <p>{{ contactMeText.introduction }}</p>
    <h1 class='text-3xl'>Let's Build Together</h1>
    <p>{{ contactMeText.buildTogether }}</p>
    <h1 class='text-3xl'>How to Reach Me</h1>
    <PillButton styles="bg-black " icon="carbon:email" :href="'mailto:' + contactMeText.email" />
    <PillButton styles="bg-black " icon="carbon:logo-github" :href="contactMeText.gitHub" />
    <PillButton styles="bg-black " icon="carbon:logo-linkedin" :href="contactMeText.linkedIn" />

    <p>{{ contactMeText.availability }}</p>

  </main>
</template>

