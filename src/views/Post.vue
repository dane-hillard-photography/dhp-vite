<script setup lang="ts">
import {useRoute} from "vue-router"
import {useHead} from "@vueuse/head"

const route = useRoute()
const postSlug = route.params.slug

const postData = {
  title: 'Post!',
  description: 'I am a post!',
}

const pageTitle = `${postData.title} | Dane Hillard Photography`
useHead({
  title: pageTitle,
  meta: [
    { property: 'og:title', content: pageTitle },
    { name: 'description', content: postData.description },
    { property: 'og:description', content: postData.description },
    { property: 'og:url', content: route.path },
  ]
})
</script>

<template>
  <h1>{{ postSlug }}</h1>
</template>

<style scoped>
</style>