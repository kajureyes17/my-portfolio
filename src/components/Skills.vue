<template>
  <section id="skills" class="skills section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row">

        <!-- LEFT: SKILLS -->
        <div class="col-lg-8">
          <div class="skills-grid">
            <div class="row g-4">

              <div
                v-for="(category, index) in skillCategories"
                :key="category.title"
                class="col-md-6"
                data-aos="flip-left"
                :data-aos-delay="200 + index * 100"
              >
                <div class="skill-card">
                  <div class="skill-header">
                    <i :class="category.icon"></i>
                    <h3>{{ category.title }}</h3>
                  </div>

                  <div class="skills-animation">
                    <div
                      v-for="skill in category.skills"
                      :key="skill.name"
                      class="skill-item"
                    >
                      <div class="skill-info">
                        <span class="skill-name">{{ skill.name }}</span>
                        <span class="skill-percentage">{{ skill.level }}%</span>
                      </div>

                      <div class="skill-bar progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          :style="{ width: skill.level + '%' }"
                          :aria-valuenow="skill.level"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- RIGHT: SUMMARY -->
        <div class="col-lg-4">
          <div class="skills-summary" data-aos="fade-left" data-aos-delay="200">
            <h3>Professional Overview</h3>
            <p>
              Software developer with over seven years of experience delivering
              stable, maintainable, and scalable applications across multiple industries.
            </p>

            <div class="summary-stats">
              <div
                v-for="stat in summaryStats"
                :key="stat.label"
                class="stat-item"
                data-aos="zoom-in"
              >
                <div class="stat-circle">
                  <i :class="stat.icon"></i>
                </div>
                <div class="stat-info">
                  <span class="stat-number">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

interface SummaryStat {
  icon: string
  value: string
  label: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'bi bi-code-slash',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 70 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Vue.js', level: 65 }
    ]
  },
  {
    title: 'Backend Development',
    icon: 'bi bi-server',
    skills: [
      { name: 'C# / ASP.NET', level: 90 },
      { name: 'ASP Classic', level: 59 },
      { name: 'PHP / Laravel', level: 70 },
      { name: 'Java / Webperformer', level: 65 },
      { name: 'MySQL', level: 82 }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: 'bi bi-tools',
    skills: [
      { name: 'Git (Version Control)', level: 90 },
      { name: 'Photoshop (Basic Assets)', level: 60 }
    ]
  }
]

const summaryStats: SummaryStat[] = [
  {
    icon: 'bi bi-clock-history',
    value: '7+',
    label: 'Years Experience'
  },
  {
    icon: 'bi bi-diagram-3',
    value: '30+',
    label: 'Projects Delivered'
  },
  {
    icon: 'bi bi-check-circle',
    value: '100%',
    label: 'Production Focus'
  }
]
</script>
