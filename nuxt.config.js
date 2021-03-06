module.exports = {
  mode: 'spa',
  head: {
    title: 'Inovando Online',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {hid: 'description', name: 'description', content: 'Inovando Online'},
      {hid: 'AUTHOR', name: 'author', content: 'André Felipe de Freitas Figueira <felipe@inovandoonline.com.br>'},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/manifest.json'}
    ]
  },
  plugins: [
    { src: '~/plugins/argon-kit' },
    { src: '~/plugins/fireauth.js', ssr: false }
  ],
  loading: {color: '#3B8070'},
  css: [
    { src: '~/assets/scss/argon.scss' },
    { src: '~/assets/vendor/font-awesome/css/font-awesome.css' },
    { src: '~/assets/vendor/nucleo/css/nucleo.css' }
  ],
  build: {
    extractCSS: true,
    cssSourceMap: false,
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

