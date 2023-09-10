// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.sass"],
  app: {
    //baseURL: '/movie-actors',
    head: {
      link: [
        { rel: "stylesheet", href: "app.css" },
        { rel: "icon", type: "image/png", href: "favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "favicon/apple-touch-icon-180x180.png"
        }
        // {rel: "prefetch", href: "/images/emilia-clarke.jpg"},
        // {rel: "prefetch", href: "/images/kit-harington.jpg"}
      ],
      //script: [{type: "text/javascript", src: 'ScrollSmoother.min.js'}]
    }
  }

})
