module.exports = dep => {
  return [
    require('stylelint'),
    require('autoprefixer')('last 2 version'),
    require('postcss-import')({
      addDependencyTo: dep
    }),
    require('postcss-url'),
    require('postcss-nested'),
    require('cssnano')()
  ];
}