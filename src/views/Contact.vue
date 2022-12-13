<script setup lang="ts">
import {useHead} from "@vueuse/head"
import {useRoute} from "vue-router"

const route = useRoute()
const pageTitle = 'Contact | Dane Hillard Photography'
const description = 'Schedule a fashion or lifestyle photography session with Dane Hillard Photography.'
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
  <h1>Get in touch!</h1>

  <p>
    My goal is to provide clients with images that do more than capture faces.
    A portrait should speak to its audience and reveal something about the subject.
    If you are interested in setting up a portrait session or have any questions
    regarding me, my equipment, or what a session with me might be like, please contact me using the form below.
  </p>
</template>

<style scoped>
</style>