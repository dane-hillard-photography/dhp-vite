import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {createHead} from '@unhead/vue'
import VueGtag from 'vue-gtag'

import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Pricing from './views/Pricing.vue'
import Post from "./views/Post.vue"
import Contact from "./views/Contact.vue"
import ContactConfirmation from "./views/ContactConfirmation.vue"
import Portfolio from "./views/Portfolio.vue"

const routes = [
  {name: 'home', path: '/', component: Home },
  {name: 'portfolio', path: '/portfolio/', component: Portfolio},
  {name: 'contact', path: '/contact/', component: Contact},
  {name: 'thanks', path: '/thanks/', component: ContactConfirmation},
  {name: 'pricing', path: '/about/pricing/', component: Pricing},
  {name: 'about', path: '/about/', component: About},
  {name: 'post', path: '/post/:slug/', component: Post},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()
const app = createApp(App)

app.use(VueGtag, {
  config: {
    id: 'G-WMVGYG6BH1'
  }
})
app.use(router)
app.use(head)
app.mount('#app')
