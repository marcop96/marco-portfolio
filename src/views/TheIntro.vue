<script setup lang="ts">
import { ref } from "vue";

const info = ref({
  title: "Hi, I'm",
  name: "Marco",
  role: "Frontend",
  description:
    "With a passion for creating beautiful and functional websites. I'm a hard worker and a quick learner, and I'm always looking for new opportunities to learn and grow as a developer.",
  image: "../assets/marcoprofile.jpg",
  links: [
    {
      name: "Github",
      url: "https://github.com/marcop96",
      icon: "carbon:logo-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marco-pianaroli96/",
      icon: "carbon:logo-linkedin",
    },
  ],
});
</script>

<template>
  <div class="flex flex-col justify-center text-white mt-20">
    <img
      src="../assets/marcoprofile.jpg"
      class="h-24 w-24 mx-2 self-center rounded-full object-cover"
    />
    <div class="flex flex-col justify-center items-center p-4"></div>
    <p class="text-6xl text-center">{{ info.title }} {{ info.name }}</p>
    <p class="text-5xl text-center">
      <span class="text-5xl text-[#910A67] text-center">
        {{ info.role }}
      </span>
      developer
    </p>
  </div>
</template>
