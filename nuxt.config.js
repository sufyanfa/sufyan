export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sufyan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'موقعي الشخصي' },
      { hid: 'keywords', name: 'keywords', content: 'مبرمج , مطور مواقع , web Developer arabic, programmer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-i18n',
      {
      locales: [
        {
          code: 'ar',
          iso : 'ar-AR',
          name: 'Arabic',
          file: 'ar.js',
          htmlAttrs: {
            dir: 'rtl'
          }
        },
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en.js',
          htmlAttrs: {
            dir: 'ltr'
          }
        },
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      lazy: true,
      langDir: 'lang/', 
      isCatchallLocale: true, // This one will be used as catchall locale
      defaultLocale: 'ar',
    } ,'@nuxtjs/axios']
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  googleAnalytics: {
    id: 'UA-XXX-X'
  },
  axios: {
    // proxy: true
  }
  
}
