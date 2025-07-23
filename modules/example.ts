import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'example',
    configKey: 'example'
  },
  setup (options, nuxt) {
    nuxt.hook('ready', () => {
      // Example module hook
      console.log('Example module loaded!')
    })
  }
})
