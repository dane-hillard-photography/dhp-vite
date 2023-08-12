<script setup lang="ts">
import {useHead} from "@unhead/vue"
import {useRoute} from "vue-router";

const route = useRoute()
const pageTitle = 'Portfolio | Dane Hillard Photography'
const description = 'Fashion and lifestyle photography portfolio for Dane Hillard Photography.'
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
  <h1>Portfolio</h1>
</template>

<style scoped>
</style>
