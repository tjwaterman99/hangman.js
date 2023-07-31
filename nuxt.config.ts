// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt', {'autoImports': ['defineStore', 'storeToRefs']}
    ],
    '@nuxtjs/supabase'
  ],
  imports: {
    dirs: [
      "stores"
    ]
  }
})
