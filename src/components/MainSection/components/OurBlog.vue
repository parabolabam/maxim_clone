<template>
  <div class="our-blog-block">
    <h4>{{ headerTitle }}</h4>
    <div class="blogCardsContainer">
      <BlogPostCard v-for="(blogInfo, index) in blogPosts" :key="index" :blogInfo="blogInfo"/>
    </div>
    <div class="more-blog-posts">
      <InputText type="submit" :initialText="'More Blog Posts'"/>
    </div>
  </div>
</template>

<script lang='ts'>
import BlogPostCard from '@/components/MainSection/components/BlogPostCard'
import InputText from '@/components/InputText'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBlogInfo } from '@/Interfaces'

@Component({
  components: {
    BlogPostCard,
    InputText
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
      imageUrl: require('@/assets/images/blogsPics/img1.jpg'),
      creationDate: new Date(),
      tags: [{
        link: '#',
        name: 'Design'
      }, {
        link: '#',
        name: 'Blog'
      }],
      blogPostHeading: {
        link: '',
        name: 'New design trends'
      },
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      readMoreLink: '#'
    },
    {
      imageUrl: require('@/assets/images/blogsPics/img2.jpg'),
      creationDate: new Date(),
      tags: [{
        link: '#',
        name: 'Design'
      },
      {
        link: '#',
        name: 'News'
      }],
      blogPostHeading: {
        link: '#',
        name: 'Retro is great'
      },
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      readMoreLink: '#'
    },
    {
      imageUrl: require('@/assets/images/blogsPics/img3.jpg'),
      creationDate: new Date(),
      tags: [{
        link: '#',
        name: 'Design'
      },
      {
        link: '#',
        name: 'Tips'
      }],
      blogPostHeading: {
        link: '#',
        name: 'Isometric mockup'
      },
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      readMoreLink: '#'
    },
    {
      imageUrl: require('@/assets/images/blogsPics/img4.jpg'),
      creationDate: new Date(),
      tags: [
        {
          link: '#',
          name: 'News'
        },
        {
          link: '#',
          name: 'Tutorial'
        }
      ],
      blogPostHeading: {
        link: '#',
        name: 'Free icon set'
      },
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      readMoreLink: '#'
    }]
  }
}
</script>

<style lang="scss" scoped>
  .our-blog-block {
    width: 100%;
    padding: 6.25rem 0 5rem 0;
    background: $color-concrete-solid;
    h4 {
      text-align: center;
      font-size: 46px;
      margin: 0.685rem 0 2.5rem 0
    }
    .more-blog-posts {
      margin-top: 1.875rem;
      text-align: center;
    }
    .blogCardsContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
</style>
