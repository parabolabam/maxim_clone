<template>
  <div class="our-blog-block">
    <h4>{{ headerTitle }}</h4>
    <div class="blogCardsContainer">
      <BlogPostCard v-for="(blogInfo, index) in blogs" :key="index"/>
    </div>
  </div>
</template>

<script lang='ts'>
import BlogPostCard from '@/components/MainSection/components/BlogCard'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBlogInfo } from '@/Interfaces'

@Component({
  components: {
    BlogPostCard
  }
})
export default class OurBlog extends Vue {
  data () {
    return {
      headerTitle: 'Our Blog'
    }
  }

  get blogPosts () : IBlogInfo[] {
    return [{
      imageUrl: '',
      creationDate: '',
      tags: [{}, {}],
      blogPostHeading: '',
      shortDescription: '',
      readMoreLink: ''
    }]
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
