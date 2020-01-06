<template>
  <div class="footer">
    <SocialMedia color="" />
  </div>
</template>

<script>
import SocialMedia from '@/components/Footer/components/SocialMedia'

export default {
  name: 'footer',
  components: {
    SocialMedia
  },
  data () {
    return {
      socialMediaColors: [
        {
          twitter: {
            color: '$color-turquoise-blue'
          }
        },
        {
          instagram: {
            color: '$color-copper'
          }
        },
        {
          dribble: {
            color: '$color-flory'
          }
        },
        {
          pinterest: {
            color: '$color-velencia'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background: $color-mine-shaft;
    padding: 3.125rem 0 3.125rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: footer;
    bottom: 0;
    width: 100%;
  }
</style>
