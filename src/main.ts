import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import './assets/js/main.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
})