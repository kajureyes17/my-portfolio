<template>
  <section id="resume" class="resume section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Resume</h2>
      <p>
        A summary of my professional background, technical experience, and career progression
        in software development across multiple industries.
      </p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row">
        <!-- Professional Journey -->
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          <div class="experience-section">
            <div class="section-header">
              <h2><i class="bi bi-briefcase"></i> Professional Journey</h2>
              <p class="section-subtitle"> Highlights of my professional experience and career development.</p>
            </div>

            <div class="experience-cards">
              <div
                v-for="(exp, index) in experiences"
                :key="index"
                class="experience-card"
                :data-aos="'zoom-in'"
                :data-aos-delay="300 + index * 100"
              >
                <div class="card-header">
                  <div class="role-info">
                    <h3>{{ exp.title }}</h3>
                    <h4>{{ exp.company }}</h4>
                  </div>
                  <span class="duration">{{ exp.duration }}</span>
                </div>
                <div class="card-body">
                  <p>{{ exp.description }}</p>
                  <ul v-if="exp.achievements && exp.achievements.length" class="achievements">
                    <li v-for="(achievement, i) in exp.achievements" :key="i">{{ achievement }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education & Achievements -->
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <div class="education-section">
            <div class="section-header">
              <h2><i class="bi bi-mortarboard"></i> Education & Achievements</h2>
              <p class="section-subtitle">
                Proven academic success combined with practical experience, fueling my passion for technology and innovation.
              </p>
            </div>

            <div class="education-timeline">
              <div class="timeline-track"></div>

              <div
                v-for="(edu, index) in educations"
                :key="index"
                class="education-item"
                :data-aos="'slide-up'"
                :data-aos-delay="300 + index * 150"
              >
                <div class="timeline-marker"></div>
                <div class="education-content">
                  <div class="degree-header">
                    <h3>{{ edu.title }}</h3>
                    <span class="year">{{ edu.year }}</span>
                  </div>
                  <h4 class="institution">{{ edu.institution }}</h4>
                  <p>{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

interface Experience {
  title: string
  company: string
  duration: string
  description: string
  achievements?: string[]
}

interface Education {
  title: string
  year: string
  institution: string
  description: string
}

const experiences = reactive<Experience[]>([
  {
    title: 'Software Developer',
    company: 'MinebeaMitsumi',
    duration: '2024 – Present',
    description: `Responsible for migrating legacy web applications into WebPerformer,
                  supporting enterprise systems used by international clients based in Tokyo, Japan.
                  The role focuses on application conversion, validation, and ensuring functional
                  equivalence during system transition.`,
    achievements: [
      'Converted existing application logic while preserving business rules and workflows',
      'Collaborated with Japan-based stakeholders to validate migrated features and outputs',
      'Ensured successful system transition by resolving migration-related issues',
    ],
  },
  {
    title: 'Software Engineer (Freelance)',
    company: 'FoxCity App',
    duration: '2025 (4 Months)',
    description:
      'Freelance full-stack developer responsible for designing and building web applications from the ground up.',
    achievements: [
      'Developed RESTful APIs and backend services to support app functionality',
      'Designed and implemented frontend interfaces for API testing and user interactions',
      'Built tutorial websites to assist users and employees in understanding and using the mobile and web applications',
      'Facilitated future integration with third-party services and franchises through well-documented APIs',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Gemmary Pawnshop and Jewellery',
    duration: '2018 - 2024',
    description: `Maintained and enhanced existing web applications covering Pawnshop, Jewellery, POS, Accounting, and Admin systems. Developed new web applications including a Bills Payment platform integrating multiple third-party APIs and a Processor Application to automate scheduled transactions.`,
    achievements: [
      'Migrated legacy web applications to modern ASP.NET Core backend APIs',
      'Led backend API development ensuring efficient and scalable services',
      'Collaborated with cross-functional teams to deliver reliable solutions supporting business operations',
    ],
  },
  {
  title: 'Programmer',
  company: 'RD Pawnshop Inc.',
  duration: 'July 6, 2017 – October 10, 2017',
  description: `Updated and maintained existing projects, and developed a queuing kiosk system to speed up customer transactions and reduce waiting time.`,
  achievements: [
    'Maintained and improved existing web applications for pawning and related services',
    'Developed a kiosk queuing system to streamline customer transactions and reduce lines',
    'Collaborated with the team to ensure smooth system operation and user experience',
  ],
},

 {
    title: 'Intern – Software Quality Assurance Tester & Software Automation Developer',
    company: 'NCR Cebu Development Center Inc.',
    duration: 'December 12, 2016 – March 24, 2017',
    description: `Performed manual and automated testing of ATM kiosks and POS systems. Assigned as Software Automation Developer to continue a project for automating web application testing, collaborating with the team to ensure smooth project handover from a departing Software Engineer.`,
  },
])

const educations = reactive<Education[]>([
  {
    title: 'Agile Workshop',
    year: 'July 23–27, 2018',
    institution: 'Metrobank Plaza, Osmeña Blvd., Cebu City',
    description: 'Comprehensive training on Agile methodologies and project management practices.',
  },
  {
    title: 'Bachelor of Science in Information Technology',
    year: '2012 - 2017',
    institution: 'Professional Academy of the Philippines',
    description: 'Major in Programming',
  },
  {
    title: 'Business System Application Seminar/Workshop',
    year: 'Feb 13, 2016',
    institution: 'Professional Academy of the Philippines',
    description: 'Focused on ASP.Net - C# development with Database Management.',
  },
])
</script>

