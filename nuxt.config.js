module.exports = {
  head: {
    title: 'Inovando Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Inovando Online' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: '/vendor/nucleo/css/nucleo.css' },
      { rel: 'stylesheet', href: '/css/argon.css?v=1.0.0', type: 'text/css' }
    ],
    script: [
      { src:'/vendor/jquery/jquery.min.js' },
      { src:'/vendor/popper/popper.min.js' },
      { src:'/vendor/bootstrap/bootstrap.min.js' },
      { src:'/vendor/headroom/headroom.min.js' },
      { src:'/vendor/onscreen/onscreen.min.js' },
      { src:'/vendor/nouislider/js/nouislider.min.js' },
      { src:'/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js' },
      { src:'/assets/js/argon.js?v=1.0.0' },
    ]
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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

