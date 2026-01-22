<template>
  <section id="hero" class="hero section">
    <div class="container">
      <div class="row g-0 align-items-center">
        
        <div class="col-lg-6 hero-content" data-aos="fade-right" data-aos-delay="100">
          <div class="content-wrapper">
            <h1 class="hero-title">
              Experienced  
              <span class="typed" :data-typed-items="typedItems.join(',')"></span>
            </h1>
            <p class="lead">
              I am a dedicated software developer with over seven years of experience delivering reliable and scalable backend and frontend solutions. I focus on creating efficient, maintainable applications that meet business needs and drive success.
            </p>

            <div class="hero-stats" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-item" v-for="(stat, i) in stats" :key="i">
                <span 
                  class="purecounter" 
                  :data-purecounter-start="0" 
                  :data-purecounter-end="stat.end" 
                  data-purecounter-duration="2"
                >0</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>

            <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <a href="#portfolio" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-outline">Get In Touch</a>
            </div>

            <div class="social-links" data-aos="fade-up" data-aos-delay="400">
              <a v-for="(social, i) in socialLinks" :key="i" :href="social.href" target="_blank" rel="noopener noreferrer">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 hero-image" data-aos="fade-left" data-aos-delay="200">
          <div class="image-container">
            <div class="floating-elements">
              <div 
                class="floating-card" 
                v-for="(card, i) in floatingCards" 
                :key="i" 
                data-aos="zoom-in" 
                :data-aos-delay="300 + i * 100"
                :class="`card-${i + 1}`"
              >
                <i :class="card.icon"></i>
                <span>{{ card.label }}</span>
              </div>
            </div>
            <!-- Use Vue asset alias @/assets/ for images -->
            <img
              src="../assets/img/profile/IMG_5224.jpeg"
              alt="Portfolio Hero"
              class="img-fluid hero-main-image"
            />
            <div class="image-overlay"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const typedItems = ref(['Software Automation Developer', 'Software Tester', 'Programmer', 'Software Developer', 'Software Engineer'])

const stats = ref([
  { end: 37, label: 'Projects Completed' },
  { end: 7, label: 'Years Experience' },
  { end: 8, label: 'Technologies Mastered' }
])

const floatingCards = ref([
  { icon: 'bi bi-server', label: 'Backend Development' },
  { icon: 'bi bi-braces', label: 'API Integration' },
  { icon: 'bi bi-lightbulb', label: 'Problem Solving' }
])

const socialLinks = ref([
  { href: 'https://web.facebook.com/kaju16/', icon: 'bi bi-facebook' },
  { href: 'https://www.linkedin.com/in/peter-damian-reyes-10011a169/', icon: 'bi bi-linkedin' },
  { href: 'https://github.com/kajureyes17', icon: 'bi bi-github' },

])
</script>
