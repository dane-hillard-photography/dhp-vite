<script setup lang="ts">
import {ref} from "vue"
import Link from "../components/Link.vue"
import {useHead} from "@vueuse/head"
import PostPreview from "../components/PostPreview.vue"
import {useRoute} from "vue-router"

const posts = ref([{
  year: 2015,
  posts: [{
    title: 'foo!',
    subtitle: 'the fooiest',
    description: 'It is a foo',
    date: '2015-12-04',
    slug: 'foo',
  }],
}, {
  year: 2016,
  posts: [{
    title: 'bar!',
    subtitle: 'the barriest',
    description: 'It is a bar',
    date: '2016-01-23',
    slug: 'bar',
  }],
}])

const firstThreePosts = ref(posts.value.flatMap((year) => year.posts).slice(0, 3))

const route = useRoute()
const pageTitle = 'Fashion and lifestyle photography in Philadelphia, Pennsylvania | Dane Hillard Photography'
const description = 'Dane Hillard is a fashion and lifestyle photographer in the Philadelphia, Pennsylvania area.'
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
  <h1>Dane Hillard Photography</h1>
  <h2>Philadelphia, PA, USA</h2>

  <section>
    <ol>
      <li v-for="post in firstThreePosts" :key="post.slug">
        <PostPreview :post="post" />
      </li>
    </ol>
  </section>

  <section>
    <h3>All posts</h3>
    
    <template v-for="year in posts.sort((a, b) => a.year < b.year ? 1 : -1)" :key="year">
      <h4>{{ year.year }}</h4>
      <ol>
        <li v-for="post in year.posts" :key="post.slug">
          <Link :target="{ name: 'post', params: { slug: post.slug } }">{{ post.title }}</Link>
        </li>
      </ol>
    </template>
  </section>
</template>

<style scoped>
</style>
