import './assets/main.css'
import { createApp } from 'vue'
import App from './index.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'
import { loader } from '@guolao/vue-monaco-editor'

loader.config({
  'paths': {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'
  },
  'vs/nls': {
    availableLanguages: {
      '*': 'en'
    }
  }
})

const pinia = createPinia()
const app = createApp(App)

app.use(VueMonacoEditorPlugin, {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'
  }
})

app.use(router)
app.use(pinia)

app.mount('#app')
