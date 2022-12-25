<script setup lang="ts">
import Link from "../components/Link.vue"
import {useHead} from "@vueuse/head"
import {useRoute} from "vue-router"

const route = useRoute()
const pageTitle = 'About | Dane Hillard Photography'
const description = 'The story behind Dane Hillard and his interests in photography.'
useHead({
  title: pageTitle,
  meta: [
    { property: 'og:title', content: pageTitle },
    { name: 'description', content: description },
    { property: 'og:description', content: description },
    { property: 'og:url', content: route.path },
  ]
})
</script>

<template>
  <h1>About me</h1>

  <div class="portrait">
    <img class="portrait__image" src="/Dane-Hillard-portrait-by-Peter-Ung-Photography.jpg" alt="Portrait of Dane Hillard" />
  </div>

  <p>
    I've been behind the camera since 2007.
    I developed a particular interest in fashion photography
    after reading several fashion blogs my friends were into.
    I really enjoy men's and women's style equally and even like to see them mix when it's done well.
  </p>
  <p>
    Fashion is an expressive medium and as such offers an individuality many others can't.
    Each person can take fashion and really make it their own.
    Learning what makes people want to design, produce, and wear different materials and patterns
    is simply intriguing and often insightful.
  </p>
  <p>
    I'd like to thank you for your interest in my work.
    I encourage you <Link :target="{ name: 'contact' }">contact me</Link> about anything
    from booking to talking shop about fashion!
  </p>

  <section>
    <h2>Serving</h2>
    <p>Philadelphia</p>

    <h2>Hours</h2>
    <ul>
      <li>Weeknights</li>
      <li>Weekends</li>
      <li>By appointment</li>
    </ul>

    <h2>Specialties</h2>
    <ul>
      <li>Fashion photography</li>
      <li>Lifestyle photography</li>
    </ul>
  </section>
</template>

<style scoped>
.portrait {
  text-align: center;
  display: grid;
  grid-template-columns: auto minmax(70px, 300px) auto;
  margin: var(--spacing-2-0-x);
}

.portrait__image {
  grid-column: 2;
  max-width: 100%;
  aspect-ratio: 1462 / 2048;
}
</style>
