<script setup lang="ts">
import PillButton from "@/components/PillButton.vue";

const contactMeText = {
  introduction:
    "I'm always open to discussing web development work or partnership opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.",
  buildTogether:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'd be more than happy to discuss your project ideas or provide information about my skills and experience.",
  email: "pianarolimarco@gmail.com",
  linkedIn: "https://www.linkedin.com/in/marco-pianaroli96/",
  gitHub: "https://www.github.com/marcop96",
  availability: "open for opportunities",
};
</script>

<template>
  <main
    class="text-white flex flex-col p-12 md:w-2/3 w-1/3 mx-auto min-h-100vh items-center"
  >
    <div class="bg-[#3C0753] rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-6">Contact Me</h1>
      <p class="text-lg mb-6">{{ contactMeText.introduction }}</p>
      <h1 class="text-3xl font-bold mb-6">Let's build together</h1>
      <p class="text-lg mb-6">{{ contactMeText.buildTogether }}</p>
      <div class="flex justify-center space-x-4">
        <PillButton
          styles="bg-white text-black rounded-full hover:bg-gray hover:rounded-full "
          icon="carbon:email"
          :href="
            'mailto:' +
            contactMeText.email +
            '?subject=Front end developer position'
          "
        />
        <PillButton
          styles="bg-white text-black rounded-full hover:bg-gray hover:rounded-full "
          icon="carbon:logo-github"
          :href="contactMeText.gitHub"
        />
        <PillButton
          styles="bg-white text-black rounded-full hover:bg-gray hover:rounded-full "
          icon="carbon:logo-linkedin"
          :href="contactMeText.linkedIn"
        />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
