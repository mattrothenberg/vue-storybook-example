const loaderUtils = require('loader-utils')

module.exports = function (source, map) {
  const loaderOptions = loaderUtils.getOptions(this) || {}
  const story = {
    template: source.trim()
  }

  loaderOptions ? story.case = loaderOptions.case : false

  this.callback(null, 'module.exports = function(Component) {Component.options.__story = ' +
    JSON.stringify(story) +
    '}', map)
}