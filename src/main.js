import { createApp } from 'vue'
import App from './App.vue'
const app =createApp(App)
import { MotionPlugin } from '@vueuse/motion'

app.use(MotionPlugin)

app.mount('#app')
