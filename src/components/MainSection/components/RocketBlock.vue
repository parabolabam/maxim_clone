<template>
  <div class="quotation-block">
    <div class="quote-container">
      <blockquote class="quote">
        {{ quotation.quote }}
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
        quote: ' We are an established and trusted web agency with a reputation for commitment and high integrity',
        author: ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.quotation-block {
    width: 100%;
    padding: 5rem 10rem 5rem 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: $color-white-solid;
    background: url('~@/assets/images/secondBlurredRoad.jpg') 50% 0 no-repeat fixed;
    width: 100%;
    height: auto;
    margin: 0;
    .quote-container {
      max-width: 70rem;
      .quote {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
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
        content: "\f135";
      }
    }
}
</style>
