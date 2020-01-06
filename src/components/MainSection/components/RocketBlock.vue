<template>
  <div class="quotation-block">
    <div class="quote-container" v-animateOnElShow="'animatedToMoveFromRight'">
      <blockquote class="quote">
        {{ quotation.quote }}
      </blockquote>
    </div>
    <div class="rocket-icon" v-animateOnElShow="'animatedToMoveFromLeft'"></div>
  </div>
</template>

<script>

export default {
  name: 'rocket-quotation',
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
    .rocket-icon {
      flex: 1;
      font-size: 10em;
      text-align: center;
      width: 100%;
      &:before {
      font-family: FontAwesome;
        content: "\f135";
      }
    }
    .animatedToMoveFromRight {
      animation: fadeFromRightSide 1s ease-in-out;
    }
    .animatedToMoveFromLeft {
      animation: fadeFromLeftSide 1s ease-in-out;
    }
}
</style>
