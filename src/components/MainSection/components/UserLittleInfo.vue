<template>
  <div class="user-little-info">
    <div class="image">
      <img :src="userLittleInfo.imageUrl" alt="user-image">
    </div>
    <div class="name"> {{ userLittleInfo.fullName }} </div>
    <div class="jobPosition"> {{ jobPosition }} </div>
  </div>
</template>

<script>

export default {
  props: {
    userLittleInfo: {
      required: true
    }
  },
  computed: {
    jobPosition () {
      return `${this.userLittleInfo.jobPosition.field} ${this.userLittleInfo.jobPosition.position}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-little-info {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    text-align: center;
    .image {
      img {
        border-radius: 50%;
      }
    }
    .name {
      color: $color-dune;
      font-weight: bold;
      font-size: 26px;
      padding-bottom: 0.7rem;
    }

  }

</style>
