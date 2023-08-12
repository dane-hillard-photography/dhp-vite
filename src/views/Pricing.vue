<script setup lang="ts">
import {useHead} from "@unhead/vue"
import {useRoute} from "vue-router"

import Link from "../components/Link.vue"

const route = useRoute()
const pageTitle = 'Pricing | Dane Hillard Photography'
const description = 'Pricing and package information for weddings, engagements, and more by Dane Hillard Photography.'
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
  <h1>Pricing</h1>
  <h2>Weddings</h2>
  <img
    class="feature"
    src="/Corey-and-Anastasia-Lake-Michigan-wedding.jpg"
    alt="A close-up portrait of a wedding couple about to kiss"
    height="534"
    width="800"
  />
  <p>
    Weddings are typically the culmination of months of logistics and stress. An ideal wedding day is the opportunity
    to reap the benefits of all that careful planning. One way to make this easier is to simplify the photography
    schedule as much as possible.
    My wedding package provides full-day coverage for a single base price. Please
    <Link :target="{ name: 'contact' }">contact me</Link>
    to
    receive more information about what the package entails!
  </p>

  <h2>Engagements</h2>
  <img
    class="feature"
    src="/Vincent-and-Daisy-engagement-Law-Quad.jpg"
    alt="A newly engaged couple smiling together"
    height="534"
    width="800"
  />
  <p>
    Engagement sessions are a great way to make your announcement with a splash. I'm interested in capturing your
    relationship and
    shared interests to help remember the moment in high fidelity for years to come. Please
    <Link :target="{ name: 'contact' }">contact me</Link>
    to
    receive more information about what the package entails!
  </p>

  <h2>Fashion, Lifestyle, and Editorial</h2>
  <img
    class="feature"
    src="/James-Howard-maroon-and-fold-jersey-detail.jpg"
    alt="An upcycled jersey with sleeve tassels"
    height="534"
    width="800"
  />
  <p>
    I am truly inspired by people who are out there creating things with their hands or innovating.
    Please
    <Link :target="{ name: 'contact' }">contact me</Link>
    to tell me more about your vision.
    We will work closely together to develop a shared understanding and get a killer product out of it!
  </p>
</template>

<style scoped>
.feature {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>
