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
    default: () => false
  })
  textArea!: Boolean;

  @Prop({
    default: () => 'text'
  })
  type!: String;

  data () {
    return {

    }
  }
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
  }
  textarea {
    min-width: 34.625rem;
    min-height: 8.25rem;
    padding: 1rem 0.5rem 0.5rem;
    margin-bottom: 1.5rem;
  }
</style>
