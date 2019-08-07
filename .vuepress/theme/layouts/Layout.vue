<template>
  <div
    class="theme-container"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar/>
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: { Home, Navbar, Footer },
  methods: {
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
