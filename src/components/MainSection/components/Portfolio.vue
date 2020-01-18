<template>
  <div @mouseenter="onMouseEnter" @mouseleave="onMouseOut" class="portfolio-work-container">
    <div :class="['right-geometry', 'overlay', 'transitioned', { 'overlay-is-active' : hovered }]" >
      <div class="portfolio-name">Portfolio name</div>
        <div class="icon-plus" @click="$emit('revealPortfolio', portfolioKey)">
          <i class="fas fa-plus"></i>
        </div>
      </div>
    <div :class="['right-geometry', 'portfolio-work', 'transitioned', { blurred: hovered }]">
      <img :src="portfolio.image" alt="pic for portfolio image">
    </div>
  </div>
</template>

<script>

export default {
  name: 'portfolio-block',
  props: {
    portfolioKey: {
      type: Number,
      required: true
    },
    portfolio: {
      types: {
        type: Array,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  },
  data () {
    return {
      hovered: false
    }
  },
  methods: {
    onMouseEnter () {
      this.hovered = true
    },
    onMouseOut () {
      this.hovered = false
    }
  }

}
</script>

<style lang="scss" scoped>
  .transitioned {
    transition: all 0.3s ease-in-out;
  }
  .blurred {
    filter: blur(8px);
  }

  .right-geometry {
    height: 15rem;
    width: 20rem;
    margin: 0.5rem;
  }
  .overlay {
    position: absolute;
    transform: scale(0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba($color-mountain-meadow, 0.3);
    font-size: 30px;
    color: $color-white-solid;
    .portfolio-name {
      margin: 1.5rem;
    }
    .icon-plus {
      font-size: 2em;
      width: 5rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }

  }
  .overlay-is-active {
    z-index: 1;
    transform: scale(1);

  }
  .portfolio-work {
    display: flex;
    justify-content: stretch;
    img {
      width: 20rem;
      height: 15rem;
    }
  }
</style>
