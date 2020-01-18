<template>
  <div class="header">
    <div>
      <a class="main-logo" href="/home">{{ logoText }}</a>
    </div>
    <Navigation :navigationMenuItems="navigationMenuItems" />
  </div>
</template>

<script>
import Navigation from '@/components/Header/components/Navigation'

export default {
  components: {
    Navigation
  },

  data () {
    return {
      navigationMenuItems: [
        {
          text: 'About'
        },
        {
          text: 'Services'
        },
        {
          text: 'Works'
        },
        {
          text: 'Blog'
        },
        {
          text: 'Contact'
        },
        {
          text: 'Page'
        }
      ],
      logoText: 'MAXIM'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    margin-bottom: 5rem;
    z-index: 100;
    padding: 1rem;
    display: flex;
    align-items: center;
    border: 1px solid black;
    color: $header-text-color;
    grid-area: header;
    justify-content: space-between;
    width: 100%;
    background: $header-background-color;
    text-transform: uppercase;
    margin: 0 auto;
    .main-logo {
      margin-left: 2rem;
      padding: 1rem;
      font-size: 1.75em;
      color: $color-white-solid;
      transition: color 0.3s;
      &:hover {
        color: $color-mountain-meadow;
      }
    }
  }
</style>
