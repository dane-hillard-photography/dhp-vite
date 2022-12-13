<script setup lang="ts">
import {ref} from "vue";

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    Copyright © {{ currentYear }} Dane Hillard | Philadelphia, Pennsylvania | contact@danehillard.com
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  font-size: var(--font-size-small);
  color: var(--font-color-muted);
  padding: var(--spacing-2-0-x);
}
</style>