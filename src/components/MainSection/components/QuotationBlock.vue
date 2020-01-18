<template>
  <div class="quotation-block">
    <div v-animateOnElShow="'animatedToMoveFromRight'" class="quote-container">
      <blockquote class="quote">
        <i class="quotation-mark fas fa-quote-left"></i>
        {{ quotation.quote }}
        <cite>{{ quotation.author }}</cite>
      </blockquote>
    </div>
    <i v-animateOnElShow="'animatedToMoveFromLeft'" class="coffee-icon fas fa-coffee"></i>
  </div>
</template>

<script>

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
    .animatedToMoveFromRight {
      animation: fadeFromRightSide 1s ease-in-out;
    }
    .animatedToMoveFromLeft {
      animation: fadeFromLeftSide 1s ease-in-out;
    }
    .quote-container {
      flex: 1;
      .quote {
        font-size: 36px;
        font-weight: 700;
        line-height: 1.1em;
        text-align: right;
        width: 80%;
        .quotation-mark {
          font-size: 64px;
          margin-right: 20px;
          opacity: 0.6;
        }
        cite {
          display: block;
          font-size: 12px;
          color: $color-emperor;
          font-style: normal;

        }
        .quot {
          font-size: 64px;
          margin-right: 20px;
          opacity: 0.6;
        }

      }
    }
    .coffee-icon {
      flex: 1;
      font-size: 10em;
      display: flex;
      justify-content: center;
      align-items: center
    }
}
</style>
