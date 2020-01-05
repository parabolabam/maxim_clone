<template>
  <div class="our-work-block">
      <h4>{{ headerTitle }}</h4>
  </div>
</template>

<script>

export default {
  name: 'our-work-block',
  data () {
    return {
      headerTitle: 'Our Works'
    }
  }
}
</script>

<style lang="scss" scoped>
    .our-work-block {
        width: 100%;
        padding: 6.25rem 0 5rem 0;
        display: flex;
        justify-content: center;
        font-size: 46px;
        font-weight: bold;
        h4 {
            margin: 0.625rem 0 1.25rem 0
        }
    }

</style>
