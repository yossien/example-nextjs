const path = require('path')
module.exports = {
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
  /* for react module css enabled
  webpackFinal: (config) => {
    // remove existing css rule
    config.module.rules = config.module.rules.filter((rule) => {
      return rule.test.toString() !== '/\\.css$/'
    })

    config.module.rules.push({
      test: '/\\.css$/',
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../components'),
    })
    return config
  },
   */
}
