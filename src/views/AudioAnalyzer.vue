<template>
  <div class="analyzerFlexContainer">
    <AudioUpload />
    <Canvas :renderType="wave" />
    <Canvas :renderType="bars" />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas'
import { ECanvasRenderTypes } from '@/enums'
import AudioUpload from '@/components/AudioUpload'

export default {
  name: 'home',
  components: {
    Canvas,
    AudioUpload
  },
  data () {
    return {
      wave: ECanvasRenderTypes.Wave,
      bars: ECanvasRenderTypes.Bars
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
