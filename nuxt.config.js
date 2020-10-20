export default {
    server: {
    port: 3000, // default: 3000
    host: '0.0.0.0',
    timing: false // default: localhost
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ckfb',
    title: 'ckfb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyClROcsRrW6N9ZA2lAFyCjUBFUz6YjOq14",
      authDomain: "saveechi99.firebaseapp.com",
      databaseURL: "https://saveechi99.firebaseio.com",
      projectId: "saveechi99",
      storageBucket: "saveechi99.appspot.com",
      messagingSenderId: "501294575118",
      appId: "1:501294575118:web:3f13a6e435cbdfcecf565f",
      measurementId: "G-LRNEPNYZ7M"

    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged'
        },
        ssr: true
      },
      firestore: true,
      functions: true,
      performance: true,
      analytics: true,
    }
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    theme: {
      dark: false,
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
