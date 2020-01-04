<template>
  <div class="main">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style lang="scss" scoped>
  .main {
    padding: 1rem;
    display: flex;
    align-items: center;
    grid-area: main;
    justify-content: center;
  }
</style>
