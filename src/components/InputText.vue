<template>
  <div class="input" v-if="!textArea">
    <input :type="type" :placeholder="placeholder" v-if="!isSubmitBtn" :class="{ invalid: isInvalid }"/>
    <input type="submit" :value="initialText" v-else />
    <div class="error-message" v-if="!!errMsg">{{ errMsg }}</div>
  </div>
  <div v-else>
    <textarea :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default () {
        return 'Start typing...'
      }
    },
    initialText: {
      type: String,
      default () {
        return 'Submit'
      }
    },
    textArea: {
      default () {
        return false
      }
    },
    type: {
      default () {
        return 'text'
      }
    },
    fontFamilyInline: {
      default () {
        return 'Arial'
      }
    }
  },
  data () {
    return {
      errMsg: ''
    }
  },
  computed: {
    isInvalid () {
      return !!this.errMsg
    },
    isSubmitBtn () {
      return this.type === 'submit'
    }
  },
  methods: {
    setErrorMessage (errMessage) {
      this.errMsg = errMessage
    }
  }

}
</script>

<style lang="scss" scoped>

  .invalid {
    background-color: #fce4e4;
    border: 1px solid #cc0033;
    outline: none;
  }
  .error-message {
    color: #cc0033;
    font-size: 16px;
    line-height: 15px;
    margin: 5px 0;

  }
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
