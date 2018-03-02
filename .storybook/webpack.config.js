const path = require('path');
const storyLoader = require.resolve('./story-loader.js')

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules[1].options = {
    loaders: {
      'story': storyLoader
    }
  }
  return storybookBaseConfig;
};