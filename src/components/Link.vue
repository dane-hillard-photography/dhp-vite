<script setup lang="ts">
export interface Props {
  external?: boolean
  target: string | object
}

const props = withDefaults(defineProps<Props>(), {
  external: false,
})
</script>

<template>
  <a v-if="external" class="link" target="_blank" rel="noopener nofollow" :href="target">
    <slot></slot>
  </a>
  <router-link v-else class="link" :to="target">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.link {
  color: var(--color-accent);
  text-decoration: none;
}

.link:hover {
  color: var(--color-accent-hover);
}
</style>