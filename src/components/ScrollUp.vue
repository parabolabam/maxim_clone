<template>
  <i class="scroll-up fas fa-arrow-up" @click="scrollToTop"></i>
</template>

<script>
export default {
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-up {
    width: 3rem;
    height: 3rem;
    background: $color-tundora-darker;
    bottom: 0;
    position: fixed;
    right: 0;
    color: $color-white-solid;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: $color-java;
    }
  }
</style>
