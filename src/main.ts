import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { invoke } from '@tauri-apps/api'
import router from './utils/router'

invoke('hello', { name: 'KYLN24' })
    .then((res) => console.log(res))

createApp(App)
    .use(router)
    .mount('#app')
