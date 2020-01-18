<template>
  <div class="analyzerFlexContainer">
    <Canvas :renderType="wave" />
    <Canvas :renderType="bars" />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas'

export default {
  name: 'home',
  components: {
    Canvas
  },
  data () {
    return {
      wave: 'Wave',
      bars: 'Bars'
    }
  }
}
</script>
<style scoped lang="scss">
  .analyzerFlexContainer{
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
</style>
