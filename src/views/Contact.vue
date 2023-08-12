<script setup lang="ts">
import {useHead} from "@unhead/vue"
import {useRoute} from "vue-router"
import Button from "../components/Button.vue";

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

  <div class="form">
    <div />
    <form name="contact" data-netlify="true" netlify-honeypot="pwned" action="/thanks/" method="post">
      <input type="hidden" name="form-name" value="contact" />

      <label class="form__label" for="first_name">First name</label>
      <input class="form__control" placeholder="First name *" name="first_name" id="first_name" type="text" required>

      <label class="form__label" for="last_name">Last name</label>
      <input class="form__control" placeholder="Last name *" name="last_name" id="last_name" type="text" required>

      <label class="form__label" for="email">Email</label>
      <input class="form__control" placeholder="Email *" name="email" id="email" type="email" required>

      <label class="form__label" for="phone">Phone number</label>
      <input class="form__control" placeholder="Phone" name="phone" id="phone" type="tel" required>

      <label class="form__label" for="Subject">Subject</label>
      <input class="form__control" placeholder="Subject *" name="subject" id="subject" type="text" required>

      <label class="form__label" for="Message">Message</label>
      <textarea class="form__control" placeholder="Message *" name="message" id="message" required></textarea>

      <Button type="submit">Send</Button>
    </form>
    <div />
  </div>
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: auto minmax(250px, 500px) auto;
}

.form__label {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}

.form__control {
  display: block;
  border-radius: 2px;
  font-family: var(--font-family-body);
  padding: var(--spacing-0-5-x);
  width: 100%;
}

.form__control:focus-visible {
  outline: 1px solid var(--color-accent);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
</style>
