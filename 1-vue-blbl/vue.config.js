module.exports = {
 productionSourceMap:true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/src/style/yangshi.scss";`
      }
    }
  },
}

const path = require('path')
module.exports={
    css: {
        requireModuleExtension: true,
        sourceMap: true,
        loaderOptions: {
          scss: {
            additionalData(content, loaderContext) {
              const { resourcePath, rootContext } = loaderContext;
              const relativePath = path.relative(rootContext, resourcePath);
              if (
                relativePath.replace(/\\/g, "/") !== "src/styles/index.scss"
              ) {
                return '@import "~@/styles/index.scss";' + content;
              }
              return content;
            },
          },
        },
      },
}
module.exports={
chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
}
}