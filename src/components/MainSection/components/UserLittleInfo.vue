<template>
  <div class="user-little-info">
    <div class="image">
      <img :src="userLittleInfo.imageUrl" alt="user-image">
    </div>
    <div class="name"> {{ userLittleInfo.fullName }} </div>
    <div class="jobPosition"> {{ jobPosition }} </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IUserLittleInfo } from '@/Interfaces'

@Component
export default class UserLittleInfo extends Vue {
    @Prop()
    userLittleInfo!: IUserLittleInfo;

    get jobPosition () : String {
      return `${this.userLittleInfo.jobPosition.field} ${this.userLittleInfo.jobPosition.position}`
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
