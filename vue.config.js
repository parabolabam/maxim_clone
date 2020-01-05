module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "~@/assets/colors.scss";
            @import "~@/assets/mixins.scss";
            @import "~@/assets/keyframe-animations.scss";
        `
      }
    }
  }
}
