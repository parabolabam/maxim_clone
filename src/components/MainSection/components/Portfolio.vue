<template>
  <div class="portfolio-work">
    <img :src="portfolio.image" alt="pic for portfolio image">
  </div>
</template>

<script>

export default {
  name: 'portfolio-block',
  props: {
    portfolio: {
      types: {
        type: Array,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .portfolio-work {
    display: flex;
    justify-content: stretch;
    img {
      max-width: 15rem;
    }
  }
</style>
