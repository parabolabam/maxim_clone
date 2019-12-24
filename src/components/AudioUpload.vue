<template>
  <div>
    <input type="file" id="rll" />
    <audio id="rllly" controls>
      <source src="" id="rlly" />
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ECanvasRenderTypes } from '@/enums'

@Component
export default class Canvas extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
