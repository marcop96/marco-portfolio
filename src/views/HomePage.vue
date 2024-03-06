<script setup lang="ts">
import TheIntro from "@/views/TheIntro.vue";
import TheProjects from "@/views/TheProjects.vue";
import AboutMe from "@/views/AboutMe.vue";
import ContactMe from "@/views/ContactMe.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <TheIntro />
    <TheProjects />
    <AboutMe class="" />

    <ContactMe class=" " />
  </main>
</template>

<style scoped>
.main {
  height: 100dvh;
}
</style>
