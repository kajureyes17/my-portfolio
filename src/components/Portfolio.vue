<template>
  <section id="portfolio" class="portfolio section">

    <!-- Section Title -->
    <div class="container section-title">
      <h2>Portfolio</h2>
      <p>Selected projects including full-stack applications and legacy system migrations.</p>
    </div>

    <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
      <div
        class="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <div class="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

          <div
            v-for="item in portfolioItems"
            :key="item.id"
            class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item"
            :class="item.filter"
          >
            <article class="portfolio-entry">
              <figure class="entry-image">
                <img
                  :src="item.image"
                  class="img-fluid"
                  :alt="item.title"
                  loading="lazy"
                />

                <div class="entry-overlay">
                  <div class="overlay-content">
                    <div class="entry-meta">{{ item.category }}</div>
                    <h3 class="entry-title">{{ item.title }}</h3>

                    <div class="entry-links">
                      <!--<a :href="item.link">
                        <i class="bi bi-arrow-right"></i>
                      </a>-->
                    </div>
                  </div>
                </div>
              </figure>
            </article>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface PortfolioItem {
  id: number
  title: string
  category: string
  filter: string
  image: string
  link: string
}

export default defineComponent({
  name: 'Portfolio',
  setup() {
    const portfolioItems: PortfolioItem[] = [
      {
        id: 1,
        title: 'Pawning Web Application V1',
        category: 'Development',
        filter: 'filter-ui',
        image: new URL('../assets/img/portfolio/GemmaryLoginV1.JPG', import.meta.url).href,
        link: 'portfolio-details.html'
      },
      {
        id: 2,
        title: 'Bills Payment Web Application',
        category: 'Development',
        filter: 'filter-development',
        image: new URL('../assets/img/portfolio/billspayment.JPG', import.meta.url).href,
        link: 'portfolio-details.html'
      },
      {
        id: 3,
        title: 'Pawning Web Application V2',
        category: 'Development',
        filter: 'filter-photography',
        image: new URL('../assets/img/portfolio/pawningv2.JPG', import.meta.url).href,
        link: 'portfolio-details.html'
      },
      {
        id: 4,
        title: 'FoxCity Tutorials Web Application',
        category: 'Development',
        filter: 'filter-marketing',
        image: new URL('../assets/img/portfolio/FoxcityTutorial.png', import.meta.url).href,
        link: 'portfolio-details.html'
      },
      {
        id: 5,
        title: 'User Test / Guide API Web Application',
        category: 'Development',
        filter: 'filter-ui',
        image: new URL('../assets/img/portfolio/testapiweb.png', import.meta.url).href,
        link: 'portfolio-details.html'
      },
      {
        id: 6,
        title: 'Product Management Web Application',
        category: 'Development',
        filter: 'filter-development',
        image: new URL('../assets/img/portfolio/ProductManagement.png', import.meta.url).href,
        link: 'portfolio-details.html'
      }
    ]

    return {
      portfolioItems
    }
  }
})
</script>
