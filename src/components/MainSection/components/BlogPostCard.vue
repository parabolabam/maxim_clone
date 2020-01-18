<template>
  <div class="blog-card-container">
    <div class="image">
      <img :src="blogInfo.imageUrl" alt="blogpost-image"/>
    </div>
    <div class="name-date-info">
      <i class="file-icon far fa-file"></i>
      <div class="creation-date"> {{ blogInfo.creationDate | dateFormat('MMMM DD, YYYY') }} </div>
      <div class="tags">
        <span>
          <a class="tag" :href="blogInfo.tags[0].link">{{ blogInfo.tags[0].name }}</a>,
          <a class="tag" :href="blogInfo.tags[1].link">{{ blogInfo.tags[1].name }}</a>
        </span>
      </div>
    </div>
    <div class="short-description-container">
      <div class="short-description">
        <a class="blogPostHeading" :href="blogInfo.blogPostHeading.link">
          {{ blogInfo.blogPostHeading.name }}
        </a>
        <p>
          {{ blogInfo.shortDescription }} ...
        </p>
      </div>
    <div class="read-more-link">
      <a :href="blogInfo.blogPostHeading.readMoreLink"> {{ readMoreText }} </a>
    </div>
  </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBlogInfo } from '@/Interfaces'

@Component
export default class BlogPostCard extends Vue {
  @Prop()
  blogInfo!: IBlogInfo;

  data () {
    return {
      headerTitle: 'Our Blog',
      readMoreText: 'Read more',
      dateFormatPattern: 'MMMM DD, YYYY' // January 20, 2020
    }
  }
}
</script>

<style lang="scss" scoped>

  .blog-card-container {
    width: 100%;
    margin: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
    }
    h4 {
      text-align: center;
      font-size: 46px;
      margin: 0.685rem 0 2.5rem 0
    }

    .image {
      display: flex;
      justify-content: stretch;
      img {
        width: 100%;
      }
    }
    .name-date-info{
      display: flex;
      justify-content: space-around;
      background: $color-mountain-meadow;
      padding: 0.7rem;
      .file-icon, .creation-date, .tags {
        margin: 0.1rem;
      }
      .file-icon {
        font-size: 2em;
        color: $color-alabaster;
      }
      .creation-date, .tags {
        line-height: 2.2;
        color: $color-alabaster;
        font-weight: bold;

      }
      .tags {
        .tag {
          color: $color-alabaster;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .short-description-container {
      padding: 1rem;
      background: $color-white-solid;
      .read-more-link {
        font-size: 13px;
        &:hover {
          text-decoration: underline;
        }
      }
      .short-description {
        p {
          opacity: 0.8;
        }
        .blogPostHeading {
          font-size: 22px;
          font-weight: bold;
          color: $color-tundora-darker;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
