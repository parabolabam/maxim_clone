<template>
<div class="header-wrapper">
  <div class="header">
    <div>
      <a class="main-logo" href="/home">{{ logoText }}</a>
    </div>
    <Navigation :navigationMenuItems="navigationMenuItems" />
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Navigation from '@/components/Header/components/Navigation'
import { INavigationMenuItem } from '@/Interfaces'

@Component({
  components: {
    Navigation
  }
})
export default class Header extends Vue {
  private navigationMenuItems: INavigationMenuItem[] = [
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
  ];

  data () {
    return {
      ...this.navigationMenuItems,
      logoText: 'MAXIM'
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper{
  .header {
    position: fixed;
    margin-bottom: 5rem;
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
}
</style>
