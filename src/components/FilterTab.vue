<template>
  <div @click="setActive" :class="['filter-tab', { active: isTabActive }]">
    {{ textCaption }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import InputText from '@/components/InputText'

@Component({
  components: {
    InputText
  }
})
export default class FilterTab extends Vue {
  @Prop()
  textCaption!: String;

  @Prop()
  tabIndex!: Number;

  @Prop()
  isActive!: Boolean;

  setActive () {
    this.$emit('tabActive', this.tabIndex)
  }

  get isTabActive () {
    return this.isActive
  }
}
</script>

<style lang="scss" scoped>
  .filter-tab {
    background: $color-white-solid;
    border: 2px solid $color-concrete-solid;
    font-size: 14px;
    max-height: 3rem;
    padding: 0.5rem;
    cursor: pointer;
    margin: 1rem;
    padding: 0.3125rem 0.625rem 0.3125rem;
    font-weight: normal;
  }
  .filter-tab:hover, .active {
      color: $color-white-solid;
      background: $color-mountain-meadow;
    }
</style>
