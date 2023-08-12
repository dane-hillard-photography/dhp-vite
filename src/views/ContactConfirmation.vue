<script setup lang="ts">
import {useHead} from "@unhead/vue"

const pageTitle = 'Thanks | Dane Hillard Photography'
useHead({
  title: pageTitle,
  meta: [
    { name: "robots", content: 'noindex' },
  ]
})
</script>

<template>
  <h1>Thank you!</h1>

  <p>
    Thanks for contacting me! If you requested further contact, I'll reach out shortly.
  </p>
</template>

<style scoped>
</style>
