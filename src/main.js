import './assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueMask from '@devindex/vue-mask'; // <-- ADD THIS LINE

const app = createApp(App)
app.mount('#app')

app.use(VueMask);  // <-- ADD THIS LINE
