module.exports = {
  srcDir: 'app',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'hello! Slack',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/vnd.microsoft.icon',
        href: '/favicons/favicon.ico',
      },
      {
        rel: 'shortcut icon',
        type: 'image/vnd.microsoft.icon',
        href: '/favicons/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-startup-image',
        href: '/favicons/apple-touch-icon.png',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  /*
  ** Read axios module automaticaly
  */
  modules: ['@nuxtjs/axios'],
  axios: {},
}
