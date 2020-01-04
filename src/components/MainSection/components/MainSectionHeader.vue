<template>
  <div class="main-section-header">
    <div class="logo-image">
      <img :src="logoImage" alt="logo-image">
    </div>
    <HooperSlider class="hooper-slider" :sliderItems="sliderItems" :hooperStyle="hooperStyle" />
  </div>
</template>

<script>
import HooperSlider from '@/components/HooperSlider'

export default {
  name: 'main-section-header',
  components: {
    HooperSlider
  },
  data () {
    return {
      logoImage: require('@/assets/images/logo.png'),
      sliderItems: [
        'CREATIVE AND PASSION',
        'WE LOVE SIMPLICITY',
        'EAT AND DRINK DESIGN'
      ],
      hooperStyle: {
        height: '5rem'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-section-header {
  width: 100%;
  min-height: 90vh;
  background: #444 url('~@/assets/images/blurred-road.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  .logo-image {
    margin-bottom: 3rem;
  }
  .hooper-slider {
    width: 100%;
    text-align: center;
    overflow: hidden;
    max-height: 4rem;
  }
}
</style>
