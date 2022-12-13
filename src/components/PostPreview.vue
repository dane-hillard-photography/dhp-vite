<script setup lang="ts">
import Button from "./Button.vue";

export interface Post {
  title: string
  date: string
  description: string
  slug: string
}

export interface Props {
  post: Post
}

const props = defineProps<Props>()
</script>

<template>
  <div class="media-object">
    <img class="media-object__image" src="https://via.placeholder.com/350" />
    <div class="media-object__details">
      <h3 class="media-object__title">{{ post.title }}</h3>
      <small class="media-object__date">{{ new Date(post.date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' }) }}</small>
      <p class="media-object__description">{{ post.description }}</p>
      <Button :target="{ name: 'post', params: { slug: post.slug } }" variant="outline">Read more</Button>
    </div>
  </div>
</template>

<style scoped>
.media-object {
  display: grid;
  grid-template-columns: auto minmax(100px, 250px) auto auto;
  grid-gap: var(--spacing-2-0-x);
}

.media-object__image {
  max-width: 100%;
  grid-column: 2;
}

.media-object__details {
  grid-column: 3;
}

.media-object__title {
  text-align: left;
}

.media-object__description {
  margin: var(--spacing-0-5-x) 0 var(--spacing-1-5-x);
}
</style>
