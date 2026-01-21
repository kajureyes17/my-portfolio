<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue';  
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Resume from './components/Resume.vue';
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue';
//import Faq from './components/Faq.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
//import Testimonials from './components/Testimonials.vue';
</script>

<template>
   <Header />
   <main class="main">
    <Hero />
    <About />
    <Skills />
    <Resume />
    <Services />
    <Portfolio />
    <Contact />
   </main>
    <Footer />
</template>

<style>
/* global layout styles if needed */
</style>
