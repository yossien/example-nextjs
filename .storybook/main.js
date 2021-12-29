const path = require('path')
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  staticDirs: [{ from: '../public/images', to: '/images' }],
  env: {
    devImageRoot: '/images',
  },
  // for react module css enabled
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
      include: path.resolve(__dirname, '../components'),
    })

    /*
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
     */

    return config
  },
}
