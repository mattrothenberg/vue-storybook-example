const loaderUtils = require('loader-utils')
let stories = []

module.exports = function (source, map) {
  const loaderOptions = loaderUtils.getOptions(this) || {}
  const story = {
    template: source.trim(),
    case: loaderUtils.getOptions(this).case || ''
  }

  stories.push(story)

  this.callback(null, 'module.exports = function(Component) {Component.options.__stories = ' +
    JSON.stringify(stories) +
    '}', map)
}