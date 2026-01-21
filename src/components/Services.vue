

<template>
  <section id="services" class="services section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Core Competencies</h2>
      <p>Here are the key areas where I deliver value and expertise.</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4">
        <div
          v-for="competency in competencies"
          :key="competency.id"
          class="col-lg-4 col-md-6"
          :data-aos="'fade-up'"
          :data-aos-delay="competency.aosDelay"
        >
          <div class="service-item">
            <div class="icon">
              <i :class="competency.iconClass"></i>
            </div>
            <h3>{{ competency.title }}</h3>
            <p>{{ competency.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Competency {
  id: number;
  title: string;
  description: string;
  iconClass: string;
  aosDelay: number;
}

const competencies: Competency[] = [
  {
    id: 1,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from database design to frontend interfaces.',
    iconClass: 'bi bi-code-slash',
    aosDelay: 100,
  },
  {
    id: 2,
    title: 'API Design & Integration',
    description: 'Creating robust RESTful APIs and integrating 3rd-party services smoothly.',
    iconClass: 'bi bi-cloud-arrow-up',
    aosDelay: 200,
  },
  {
    id: 3,
    title: 'Legacy System Migration',
    description: 'Helping businesses transition old applications to modern platforms efficiently.',
    iconClass: 'bi bi-arrow-repeat',
    aosDelay: 300,
  },
];
</script>