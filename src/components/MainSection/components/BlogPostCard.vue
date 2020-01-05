<template>
  <div class="blog-card-container">
    <div class="image"></div>
    <div class="name-date-info"></div>
    <div class="short-description"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBlogInfo } from '@/Interfaces'

@Component
export default class BlogCard extends Vue {
  @Prop()
  BlogInfo!: IBlogInfo;

  data () {
    return {
      headerTitle: 'Our Blog'
    }
  }
}
</script>

<style lang="scss" scoped>
  .our-blog-block {
    width: 100%;
    padding: 6.25rem 0 5rem 0;
    h4 {
      text-align: center;
      font-size: 46px;
      margin: 0.685rem 0 2.5rem 0
    }
  }
</style>
