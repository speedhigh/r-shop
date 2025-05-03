import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .mount('#app')
