import './assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE

const app = createApp(App)
app.use(VueMask);  // <-- ADD THIS LINE
app.mount('#app')
