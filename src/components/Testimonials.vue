<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

onMounted(() => {
  new Swiper('.swiper', {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  })
})
</script>

<template>
  <section id="testimonials" class="testimonials section">
    <div class="container section-title">
      <h2>Testimonials</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row">
        <div class="col-12">
          <div class="critic-reviews" data-aos="fade-up" data-aos-delay="300">
            <div class="row">
              <!-- Your static reviews here (you can keep as-is) -->
              <div class="col-md-4" v-for="(review, i) in staticReviews" :key="i">
                <div class="critic-review">
                  <div class="review-quote">"</div>
                  <div class="stars" v-html="review.stars"></div>
                  <p>{{ review.text }}</p>
                  <div class="critic-info">
                    <div class="critic-name">{{ review.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonials-container">
            <div
              class="swiper testimonials-slider"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(slide, index) in sliderTestimonials"
                  :key="index"
                >
                  <div class="testimonial-item">
                    <div class="stars" v-html="slide.stars"></div>
                    <p>{{ slide.text }}</p>
                    <div class="testimonial-profile">
                      <img
                        :src="slide.img"
                        alt="Reviewer"
                        class="img-fluid rounded-circle"
                      />
                      <div>
                        <h3>{{ slide.name }}</h3>
                        <h4>{{ slide.title }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center" data-aos="fade-up">
          <div class="overall-rating">
            <div class="rating-number">4.8</div>
            <div class="rating-stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <p>Based on 230+ reviews</p>
            <div class="rating-platforms">
              <span>Goodreads</span>
              <span>Amazon</span>
              <span>Barnes &amp; Noble</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const staticReviews = [
  {
    stars:
      '<i class="bi bi-star-fill"></i>'.repeat(5),
    text:
      'Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    name: 'The New York Times',
  },
  {
    stars:
      '<i class="bi bi-star-fill"></i>'.repeat(4) + '<i class="bi bi-star-half"></i>',
    text:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.',
    name: 'Washington Post',
  },
  {
    stars:
      '<i class="bi bi-star-fill"></i>'.repeat(5),
    text:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.',
    name: 'The Guardian',
  },
]

const sliderTestimonials = [
  {
    stars: '<i class="bi bi-star-fill"></i>'.repeat(5),
    text:
      'Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.',
    img: '@/assets/img/person/person-f-1.webp',
    name: 'Jane Smith',
    title: 'Book Enthusiast',
  },
  {
    stars: '<i class="bi bi-star-fill"></i>'.repeat(5),
    text:
      'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus.',
    img: '@/assets/img/person/person-m-2.webp',
    name: 'Michael Johnson',
    title: 'Sci-Fi Blogger',
  },
  {
    stars: '<i class="bi bi-star-fill"></i>'.repeat(4) + '<i class="bi bi-star-half"></i>',
    text:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.',
    img: '@/assets/img/person/person-f-3.webp',
    name: 'Emily Davis',
    title: 'Book Club President',
  },
  {
    stars: '<i class="bi bi-star-fill"></i>'.repeat(5),
    text:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur.',
    img: '@/assets/img/person/person-m-4.webp',
    name: 'Robert Wilson',
    title: 'Literary Reviewer',
  },
]
</script>
