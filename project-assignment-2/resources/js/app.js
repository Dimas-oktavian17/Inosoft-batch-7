import './bootstrap';
import { createApp } from 'vue'
import Example from './components/example.vue'
const app = createApp()
app.component('Example', Example)
app.mount('#app')
