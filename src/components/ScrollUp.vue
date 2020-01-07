<template>
  <div class="scrollUp" @click="scrollToTop"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class ScrollUp extends Vue {
  scrollToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
  .scrollUp {
    width: 3rem;
    background: $color-tundora-darker;
    bottom: 0;
    position: fixed;
    right: 0;
    color: $color-white-solid;

    &:before {
      content: "\f106";
      font-family: FontAwesome;
      font-size: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
    }
    &:hover {
      background: $color-java;
    }
  }
</style>
