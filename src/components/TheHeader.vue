<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <div class="flex justify-center p-7">
    <nav
      class="flex flex-row color-white border-2 rounded-lg border-white w-fit h-fit p-2 fixed top-4 backdrop-blur"
    >
      <router-link
        to="/"
        class="p-2 hover:bg-#3C0753 hover:rounded-lg"
        @click="scrollToTop"
        >home</router-link
      >
      <router-link
        to="projects"
        class="p-2 hover:bg-#3C0753 hover:rounded-lg"
        @click="scrollToTop"
        >projects</router-link
      >
      <router-link
        to="about"
        class="p-2 hover:bg-#3C0753 hover:rounded-lg"
        @click="scrollToTop"
        >about me</router-link
      >
      <router-link
        to="contactme"
        class="p-2 hover:bg-#3C0753 hover:rounded-lg"
        @click="scrollToTop"
        >contact</router-link
      >
    </nav>
  </div>
</template>
