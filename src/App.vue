<template>
  <router-view></router-view>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Open Sans', Arial, sans-serif;
  color: $color-tundora;
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
