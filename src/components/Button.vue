<script setup lang="ts">
import Link from "./Link.vue";

export interface Props {
  variant?: 'primary' | 'outline'
  target?: string | object
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
})
</script>

<template>
  <Link v-if="target" :class="['button', `button--${variant}`]" :target="target">
    <slot></slot>
  </Link>

  <button v-else :class="['button', `button--${variant}`]" :type="type">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: var(--spacing-0-5-x) var(--spacing-1-0-x);
  font-family: var(--font-family-button);
  border-radius: 4px;
  color: var(--color-white);
}

.button:hover {
  cursor: pointer;
}

.button--primary {
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
}

.button--primary:hover {
  background: var(--color-accent-hover);
  border: 2px solid var(--color-accent-hover);
  color: var(--color-white);
}

.button--outline {
  background: transparent;
  border: 2px solid var(--color-white);
}

.button--outline:hover {
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
  color: var(--color-white);
}
</style>