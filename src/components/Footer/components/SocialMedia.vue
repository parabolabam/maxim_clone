<template>
  <div class="footer">
    <div class="social-media">
      <a :href="instagramLink" target="_blank" rel="noopener noreferrer"><div class="instagram"></div></a>
      <a :href="twitterLink" target="_blank" rel="noopener noreferrer"><div class="twitter"></div></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><div class="pinterest"></div></a>
    </div>
    <div class="allRightsReserved">
        <p> {{ allRightsReservedText }}, {{ date | dateFormat(yearDateFormat) }} </p>
    </div>
    <div class="credits">
        {{ designedBy.begin }} <a :href="designedBy.ending.link" target="_blank" rel="noopener noreferrer"> {{ designedBy.ending.name }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      allRightsReservedText: '© Made by Sorokin Vladislav',
      date: new Date(),
      yearDateFormat: 'YYYY',
      twitterLink: 'https://twitter.com/parabolabam',
      instagramLink: 'https://www.instagram.com/parabola_bam/',
      designedBy: {
        begin: 'Designed by',
        ending: {
          link: '#',
          name: 'BootstrapMade'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    .social-media {
      font-family: FontAwesome;
      font-size: 3em;
      display: flex;
      justify-content: space-between;
      a {
          color: $color-white-solid;
      }
      .instagram, .twitter, .pinterest {
          padding: 1rem;
      }
      .instagram {
        &:before {
          content: "\f16d";
        }

        &:hover {
            color: $color-copper;
        }
      }
      .twitter {
        &:before {
          content: "\f081"
        }
        &:hover {
          color: $color-turquoise-blue;
        }
      }
      .pinterest {
        &:before {
          content: "\f0d2"
        }
        &:hover {
          color: $color-velencia
        }
      }
    }
    .credits, .allRightsReserved {
      color: $color-alto;
    }
    .credits {
      a {
        color: $color-alto;
        &:hover {
            text-decoration: underline;
        }
      }
    }
}
</style>
