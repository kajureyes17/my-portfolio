<template>
  <section id="about" class="about section">

    <!-- Section Title -->
    <div class="container section-title">
      <h2>{{ sectionTitle }}</h2>
      <p>{{ sectionSubtitle }}</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-center">

        <!-- Profile Image -->
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
          <div class="profile-image-wrapper">
            <div class="profile-image">
              <img
                :src="profileImage"
                alt="Profile"
                class="img-fluid"
              />
            </div>

            <div class="signature-section">
              <img
                :src="signatureImage"
                alt="Signature"
                class="signature"
              />
              <p class="quote">{{ signatureQuote }}</p>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="col-lg-7" data-aos="fade-left" data-aos-delay="300">
          <div class="about-content">

            <!-- Intro -->
            <div class="intro">
              <h2>{{ introTitle }}</h2>
              <p>{{ introDescription }}</p>
            </div>

            <!-- Skills -->
            <div class="skills-grid">
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill-item"
                data-aos="zoom-in"
                :data-aos-delay="skill.delay"
              >
                <div class="skill-icon">
                  <i :class="skill.icon"></i>
                </div>
                <h4>{{ skill.title }}</h4>
                <p>{{ skill.description }}</p>
              </div>
            </div>

            <!-- Journey Timeline -->
            <div class="journey-timeline" data-aos="fade-up" data-aos-delay="300">
              <div
                v-for="(item, index) in timeline"
                :key="index"
                class="timeline-item"
              >
                <div class="year">{{ item.year }}</div>
                <div class="description">{{ item.description }}</div>
              </div>
            </div>

            <!-- CTA -->
            <div class="cta-section" data-aos="fade-up" data-aos-delay="400">
              <div class="fun-fact">
                <span class="emoji">{{ ctaEmoji }}</span>
                <span class="text">{{ ctaText }}</span>
              </div>
              <div class="action-buttons">
                <a href="#portfolio" class="btn btn-primary">
                  View My Work
                </a>
                <a :href="resumeLink" class="btn btn-outline" download>
                  Download Resume
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
/* ================================
   Section Text
================================ */
const sectionTitle = 'About Me'
const sectionSubtitle =
  'A software developer with over seven years of experience delivering reliable, scalable, and maintainable solutions.'

/* ================================
   Images
================================ */
const profileImage = new URL(
  '../assets/img/profile/pic1.jpg',
  import.meta.url
).href
const signatureImage = new URL(
  '../assets/img/misc/signature-1.webp',
  import.meta.url
).href
const signatureQuote =
  'Bringing years of experience to build scalable, maintainable applications.'

/* ================================
   Intro
================================ */
const introTitle = "Hi, I'm Damian – a Software Developer"
const introDescription =
  'With seven years in software development, I have contributed to diverse projects across multiple industries, delivering solutions that drive real-world results. I value problem-solving, collaboration, and continuous improvement in an evolving technology landscape.'

/* ================================
   Skills
================================ */
interface Skill {
  icon: string
  title: string
  description: string
  delay: number
}

const skills: Skill[] = [
  {
    icon: 'bi bi-server',
    title: 'Backend Development',
    description:
      'Designing and maintaining reliable server-side applications and APIs.',
    delay: 400,
  },
  {
    icon: 'bi bi-braces',
    title: 'Frontend Development',
    description:
      'Building responsive and user-friendly interfaces with modern frameworks.',
    delay: 450,
  },
  {
    icon: 'bi bi-lightbulb',
    title: 'Problem Solving',
    description:
      'Applying critical thinking to develop efficient and scalable solutions.',
    delay: 500,
  },
]

/* ================================
   Timeline
================================ */
interface TimelineItem {
  year: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    year: '2017',
    description:
      'Graduated with a BSIT degree from Professional Academy of the Philippines',
  },
  {
    year: '2017',
    description:
      'Interned at NCR Cebu Development Center Inc. as Software Quality Assurance Tester and Automation Developer',
  },
  {
    year: '2017',
    description: 'Programmer at RD Pawnshop Inc.',
  },
  {
    year: '2018',
    description: 'Software Developer at Gemmary Pawnshop and Jewellery',
  },
  {
    year: '2024',
    description: 'Software Developer at MinebeaMitsumi',
  },
  {
    year: '2025',
    description: 'Freelance Software Engineer for FoxCity App',
  },
]

/* ================================
   CTA
================================ */
const ctaEmoji = '💻'
const ctaText =
  'Dedicated to building scalable and dependable software solutions.'
const resumeLink = '/path/to/resume.pdf'
</script>
