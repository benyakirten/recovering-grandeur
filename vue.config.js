module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/scss/_mixins.scss";
            @import "@/scss/_variables.scss";
          `
        }
      }
    }
  };