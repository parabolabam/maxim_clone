<template>
  <div class="input" v-if="!textArea">
    <input :type="type" :placeholder="placeholder" />
  </div>
  <div v-else>
    <textarea :placeholder="placeholder"></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
  @Prop({
    default: () => 'Start typing...'
  })
  placeholder!: String;

  @Prop({
    default: () => 'Submit'
  })
  initialText!: String;

  @Prop({
    default: () => false
  })
  textArea!: Boolean;

  @Prop({
    default: () => 'text'
  })
  type!: String;

  @Prop({
    default: () => 'Arial'
  })
  fontFamilyInline!: String;
}
</script>

<style lang="scss" scoped>

  input, textarea {

    background: rgb(227, 231, 228);
    font-family: 'Open Sans', sans serif;
    border: 0;
    font-size: 16px;
    text-align: left;
    vertical-align: middle;
    padding: 0.5rem;
    border-radius: 3px;
  }
  input {
    min-width: 34.625rem;
    min-height: 2.75rem;
    margin-bottom: 1.875rem;
    &[type='submit'] {
      text-align: center;
      min-width: 11.28rem;
      min-height: 3.75rem;
      padding: 1.125rem 1.5625rem;
      background: $color-java;
      color: $color-white-solid;
      &:hover {
        background: $color-mine-shaft-darker;
      }
    }
  }
  textarea {
    min-width: 34.625rem;
    min-height: 7.875rem;
    padding: 1rem 0.5rem 0.5rem;
    margin-bottom: 1.875rem;
  }
</style>
