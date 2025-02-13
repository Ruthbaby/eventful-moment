import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CreateAccount from './components/CreateAccount.vue'

const app = createApp(App)
app.component('create-account', CreateAccount)
app.use(router)

app.mount('#app')
