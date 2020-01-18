<template>
  <div class="who-we-are-block">
      <h4>{{ headerTitle }}</h4>
      <div class="row">
          <div class="creative-text">
              <h2>
                  {{ headerLevelTwoTitle.nonStrongPart }}
                  <strong> {{ headerLevelTwoTitle.strongPart }} </strong>
              </h2>
              <p>{{ paragraphText }}</p>
          </div>
          <div class="creative-pic">
              <img :src="creativeImage" alt="creativity-pic">
          </div>
      </div>
      <div class="row users-images">
          <UserLitteInfo v-for="(userLittleInfo, index) in userInfo" :key="index" :userLittleInfo="userLittleInfo" />
      </div>
  </div>
</template>

<script>
import UserLitteInfo from '@/components/MainSection/components/UserLittleInfo'

export default {
  components: {
    UserLitteInfo
  },
  data () {
    return {
      headerTitle: 'Who We Are',
      headerLevelTwoTitle: {
        nonStrongPart: 'We live with',
        strongPart: 'creativity'
      },
      paragraphText: `
      Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.
      `,
      creativeImage: require('@/assets/images/creativity.png'),
      userInfo: [{
        name: 'John',
        secondName: '',
        fullName: 'John Doe',
        jobPosition: {
          field: 'Art',
          position: 'director'
        },
        imageUrl: require('@/assets/images/people/ArtDirector.jpg')
      },
      {
        name: 'Mike',
        secondName: '',
        fullName: 'Mike Doe',
        jobPosition: {
          field: 'Web',
          position: 'developer'
        },
        imageUrl: require('@/assets/images/people/WebDeveloper.jpg')
      },
      {
        name: 'Neil',
        secondName: '',
        fullName: 'Neil Doe',
        jobPosition: {
          field: 'Web',
          position: 'designer'
        },
        imageUrl: require('@/assets/images/people/WebDesigner.jpg')
      },
      {
        name: 'Mark',
        secondName: '',
        fullName: 'Mark Joe',
        jobPosition: {
          field: 'UI',
          position: 'designer'
        },
        imageUrl: require('@/assets/images/people/UIDesigner.jpg')
      },
      {
        name: 'Stephen',
        secondName: '',
        fullName: 'Stephen B',
        jobPosition: {
          field: 'Digital',
          position: 'imaging'
        },
        imageUrl: require('@/assets/images/people/DigitalImaging.jpg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.who-we-are-block {
    padding: 2rem 0 2rem 0;
    width: 100%;
    background: $color-concrete-solid;
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        .creative-text {
            max-width: 20rem;
        }
    }
    h4 {
        text-align: center;
        font-size: 46px;
    }
    .creative-text {
        h2 {
            font-weight: 100;
            font-size: 30px;
        }
        p {
            font-size: 16px;
        }
    }
}
</style>
