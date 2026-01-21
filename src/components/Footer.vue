<template>
  <footer id="footer" class="footer dark-background">

    <div class="container text-center">

      <div class="copyright">
        <p>
          © {{ currentYear }}
          <strong class="px-1 sitename">Peter Damian Reyes</strong>
          <span>— Software Developer</span>
        </p>
      </div>

      <div class="social-links d-flex justify-content-center">
        <a
          v-for="link in socialLinks"
          :key="link.icon"
          :href="link.url"
          target="_blank"
          rel="noopener"
        >
          <i :class="link.icon"></i>
        </a>
      </div>

      <div class="credits">
        <span>Built with Vue </span>
      </div>

    </div>

  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    icon: 'bi bi-linkedin',
    url: 'https://www.linkedin.com/'
  },
  {
    icon: 'bi bi-github',
    url: 'https://github.com/'
  }
]
</script>
