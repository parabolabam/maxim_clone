<template>
  <div class="activity-little-info">
    <div class="image">
      <img :src="activityLittleInfo.imageUrl" alt="activity-image">
    </div>
    <div class="name"> {{ activityName }} </div>
    <div class="description"> {{ activityLittleInfo.description }} </div>
  </div>
</template>

<script>

export default {
  props: {
    activityLittleInfo: {
      required: true
    }
  },
  computed: {
    activityName () {
      return `${this.activityLittleInfo.field} ${this.activityLittleInfo.activity}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .activity-little-info {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: $color-alabaster;
    max-width: 18rem;
    margin: 0 2rem 0 2rem;
    padding: 1rem 2rem 2rem 2rem;
    transition: all 0.3s ease-in-out;
    .name {
      margin: 0.625rem 0 0.9375rem 0;
      font-weight: bold;
      font-size: 22px;
      transition: all 0.3s linear;
    }
    .image {
      transition: all 0.3s ease-in-out;
    }
    .description {
      font-weight: normal;
      font-size: 1rem;
      opacity: 0.7;
      max-width: 13rem;
    }
    &:hover {
      background: $color-flamingo-darker;
      animation: fadeMeIn 0.3s ease-in-out;
      .name {
        animation: moveFromDownsideUp 0.8s ease-in-out;
      }
      .image {
        animation: scaleUpAndThenDown 0.8s ease-in-out 100ms;
      }
    }
  }

</style>
