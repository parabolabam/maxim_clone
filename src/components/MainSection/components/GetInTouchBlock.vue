<template>
  <div class="get-in-touch">
    <div class="container">
      <h4> {{ headerTitle }} </h4>
      <p>{{ paragraphText }}</p>
      <div class="get-in-touch-form">
        <div class="first-column">
          <InputText :placeholder="'Your Name'" :type="'text'" v-validate="[['empty'], 'Provide not empty value']"/>
          <InputText :placeholder="'Your Email'" :type="'text'" v-validate="[['email'], 'Invalid Email']"/>
          <InputText :placeholder="'Your Subject'" :type="'text'" v-validate="[['empty'], 'Provide not empty value']"/>
        </div>
        <div class="second-column">
          <InputText :textArea="true" :placeholder="'Message'"/>
          <InputText :type="'submit'" :initialText="'Send message'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/InputText'

export default {
  name: 'get-in-touch',
  components: {
    InputText
  },
  data () {
    return {
      headerTitle: 'Get In Touch',
      paragraphText: `Reque facer nostro et ius, cu persius mnesarchum disputando eam, clita prompta et mel vidisse phaedrum pri et. Facilisis posidonium ex his. Mutat iudico vis in, mea aeque tamquam scripserit an, mea eu ignota viderer probatus. Lorem legere consetetur ei eum. Sumo aeque assentior te eam, pri nominati posidonium consttuam`
    }
  }
}
</script>

<style lang="scss" scoped>
  .get-in-touch {
    padding: 6.25rem 0 5rem 0;
    width: 100%;
    background: $color-mountain-meadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
      margin: 0  3.25rem 0 3.25rem;
      h4 {
        text-align: center;
        font-size: 46px;
        margin: 0.685rem 0 2.5rem 0;
        color: $color-white-solid;
      }
      p {
          color: $color-alabaster-lighter;
          opacity: 0.7;
          max-width: 71rem;
          line-height: 1.6em;
      }
      .get-in-touch-form {
          display: flex;
          justify-content: center;
          .first-column, .second-column {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
          .first-column {
            margin: 1rem 1rem 1rem 0;
          }
          .second-column {
            margin: 1rem 0 1rem 1rem;
          }
      }
    }

  }
</style>
