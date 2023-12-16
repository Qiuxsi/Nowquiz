import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import VueClipboard from 'vue-clipboard2'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueClipboard)
app.mount('#app')
