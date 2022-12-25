<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <router-link class="brand-logo" :to="{ name: 'home' }">
      <img class="responsive-image" src="/dhp.png" alt="Dane Hillard Photography logo" />
    </router-link>

    <ul class="site-links">
      <li>
        <router-link class="site-links__link" :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link class="site-links__link" :to="{ name: 'portfolio' }">Portfolio</router-link>
      </li>
      <li>
        <router-link class="site-links__link" :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <li>
        <router-link class="site-links__link" :to="{ name: 'pricing' }">Pricing</router-link>
      </li>
      <li>
        <router-link class="site-links__link" :to="{ name: 'about' }">About</router-link>
      </li>
    </ul>

    <ul class="social-links">
      <li>
        <a class="social-links__link" target="_blank" rel="noopener" title="Facebook" href="https://www.facebook.com/danehillard">
          <img class="responsive-image social-links__icon" src="/facebook.svg" alt="Facebook logo" />
        </a>
      </li>
      <li>
        <a class="social-links__link" target="_blank" rel="noopener" title="Instagram" href="https://www.instagram.com/danehillard">
          <img class="responsive-image social-links__icon" src="/instagram.svg" alt="Instagram logo" />
        </a>
      </li>
      <li>
        <a class="social-links__link" target="_blank" rel="noopener" title="Twitter" href="https://www.twitter.com/danehillard">
          <img class="responsive-image social-links__icon" src="/twitter.svg" alt="Twitter logo" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  margin-top: 0;
}

.nav {
  background: var(--color-background);
  display: grid;
  grid-template-columns: max-content auto max-content;
  position: sticky;
  top: 0;
  padding: var(--spacing-0-5-x);
}

.site-links {
  display: inline-flex;
  flex-wrap: wrap;
}

.site-links__link {
  text-decoration: none;
  font-family: var(--font-family-link);
  color: var(--font-color-muted);
  padding: 0 2vw;
}

.site-links__link:hover {
  color: var(--font-color);
}

.social-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--spacing-1-0-x);
  justify-items: end;
}

.brand-logo img {
  aspect-ratio: 500 / 294;
}

.brand-logo,
.social-links__link {
  display: inline-block;
  height: 35px;
  width: auto;
}

.responsive-image {
  max-height: 100%;
  max-width: 100%;
}

.social-links__icon {
  aspect-ratio: 1 / 1;
}

@media screen and (max-width: 600px) {
  .nav {
    grid-template-columns: auto;
  }

  .brand-logo {
    text-align: center;
    height: 25px;
    margin-bottom: var(--spacing-0-5-x);
  }

  .site-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .site-links__link {
    padding: 0 var(--spacing-0-5-x);
  }

  .social-links {
    justify-items: center;
  }
}
</style>
