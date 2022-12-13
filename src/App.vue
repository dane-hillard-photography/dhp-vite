<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Footer from "./components/Footer.vue"
</script>

<template>
  <Navigation />
  <main class="main">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
.main {
  padding: var(--spacing-2-0-x);
}
</style>
