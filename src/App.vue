<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
  a {
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  ul {
   list-style: none;
  }
</style>
