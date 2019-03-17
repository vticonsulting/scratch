const { resolve } = require('path')
const axios = require('axios')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  // rootDir: resolve(__dirname, '../..'),

  srcDir: resolve(__dirname, 'src/'),

  buildDir: resolve(__dirname, '.nuxt'),

  serverMiddleware: ['~/api/auth'],

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css',
      },
    ],
  },

  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/jsvuejs1/' : '/',
    linkActiveClass: 'active',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vue-flash-message', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios', // https://axios.nuxtjs.org
    '@nuxtjs/auth', // https://auth.nuxtjs.org
    'bootstrap-vue/nuxt', // https://bootstrap-vue.js.org/docs
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
  },

  proxy: {
    '/api': 'http://localhost:3000',
  },

  auth: {
    redirect: {
      callback: '/callback',
    },
    strategies: {
      local: {
        endpoints: {
          login: { propertyName: 'token.accessToken' },
        },
      },
      auth0: {
        domain: 'nuxt-auth.auth0.com',
        client_id: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv',
      },
      facebook: {
        client_id: '1671464192946675',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday'],
      },
      google: {
        client_id: '956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com',
      },
      github: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
      twitter: {
        client_id: 'FAJNuxjMTicff6ciDKLiZ4t0D',
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    extractCSS: true,
  },

  generate: {
    routes () {
      return axios
        .get('https://randomuser.me/api/?nat=gb,us,au&results=10&seed=abc')
        .then(res => res.data.results.map(user => `/users/${user.login.uuid}`))
    },
  },
}
