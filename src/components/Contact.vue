<template>
  <section id="contact" class="contact section light-background">

    <!-- Section Title -->
    <div class="container section-title">
      <h2>{{ sectionTitle }}</h2>
      <p>{{ sectionDescription }}</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4 g-lg-5">

        <!-- LEFT: CONTACT INFO -->
        <div class="col-lg-5">
          <div class="info-box" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ infoTitle }}</h3>
            <p>{{ infoDescription }}</p>

            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="info-item"
              data-aos="fade-up"
              :data-aos-delay="item.delay"
            >
              <div class="icon-box">
                <i :class="item.icon"></i>
              </div>
              <div class="content">
                <h4>{{ item.label }}</h4>
                <p v-for="(line, i) in item.values" :key="i">
                  {{ line }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: CONTACT FORM -->
        <div class="col-lg-7">
          <div class="contact-form" data-aos="fade-up" data-aos-delay="300">
            <h3>{{ formTitle }}</h3>
            <p>{{ formDescription }}</p>

            <form class="php-email-form" @submit.prevent>
              <div class="row gy-4">

                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div class="col-12">
                  <textarea
                    class="form-control"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div class="col-12 text-center">
                  <button type="submit" class="btn">
                    Send Message
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
interface ContactItem {
  label: string
  icon: string
  values: string[]
  delay: number
}

/* Section content */
const sectionTitle = 'Contact'
const sectionDescription =
  'Feel free to reach out for job opportunities, freelance projects, or professional collaboration.'

/* Info box */
const infoTitle = 'Contact Info'
const infoDescription =
  'You can reach me through the details below. I am open to job opportunities, freelance projects, and professional collaboration.'

const contactInfo: ContactItem[] = [
  {
    label: 'Address',
    icon: 'bi bi-geo-alt',
    values: [
      'Purol General Luna, Brgy. Tabunok',
      'Talisay City, Cebu'
    ],
    delay: 300
  },
  {
    label: 'Phone Number',
    icon: 'bi bi-telephone',
    values: [
      '0961 054 9013',
      '0956 155 4122'
    ],
    delay: 400
  },
  {
    label: 'Email Address',
    icon: 'bi bi-envelope',
    values: [
      'peterdamianreyes17@gmail.com',
      'kajureyes17@gmail.com'
    ],
    delay: 500
  }
]

/* Form content */
const formTitle = 'Get In Touch'
const formDescription =
  'Feel free to reach out for job opportunities, freelance projects, or any professional inquiries. I’m always open to discussing how I can contribute.'
</script>
