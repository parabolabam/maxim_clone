<template>
  <div class="quotation-block">
    <div class="quote-container">
      <blockquote class="quote">
        {{ quotation.quote }}
        <cite>{{ quotation.author }}</cite>
      </blockquote>
    </div>
    <div class="coffee-icon"></div>
  </div>
</template>

<script>
import HooperSlider from '@/components/HooperSlider'

export default {
  name: 'main-section-header',
  data () {
    return {
      quotation: {
        quote: "There's huge space beetween creativity and imagination",
        author: 'Mark Simmons, Nett Media'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.quotation-block {
    width: 100%;
    padding: 5rem 10rem 5rem 10rem;
    background-color: $color-mountain-meadow;
    display: flex;
    color: $color-white-solid;
    .quote-container {
      flex: 1;
      .quote {
        font-size: 36px;
        font-weight: 700;
        line-height: 1.1em;
        text-align: right;
        width: 80%;
        cite {
          display: block;
          font-size: 12px;
          color: $color-emperor;
          font-style: normal;
          &:before {
            content: "\2014 \0020"
          }
        }
        &:before {
          font-size: 64px;
          font-family: FontAwesome;
          content: "\f10d";
          margin-right: 20px;
          opacity: 0.6;
        }
        &:after {
          content: ""
        }
      }
    }
    .coffee-icon {
      flex: 1;
      font-size: 10em;
      text-align: center;
      &:before {
      font-family: FontAwesome;
        content: "\f0f4";
      }
    }
}
</style>
