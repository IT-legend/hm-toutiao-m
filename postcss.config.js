// 这是固定的文件名，不能更改，在此文件下专门处理postcss插件
module.exports = {
  // 所有的postcss插件
  plugins: {
    //   自动给css样式加前缀的属性
    autoprefixer: {

    },
    'postcss-pxtorem': {
      // 基准值
      rootValue: 37.5,
      proList: ['*'] // 所有的都转化
    }
  }
}
// 以上内容都是固定写法，不可擅自更改
