import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/js/all'

// 9.26 만끽 세팅 추가
import webviewBridge from './webviewBridge.js';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(webviewBridge)
app.mount('#app')