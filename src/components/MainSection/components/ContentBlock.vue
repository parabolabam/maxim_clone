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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
