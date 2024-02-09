import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import App from '@/App.vue'
import BtnVue from '@/base/button.vue'
import navbar from '@/navbar/navbar.vue'
const app = createApp()
app.component('IconVue', Icon)
    .component('DefaultLayout', DefaultLayout)
    .component('App', App)
    .component('BtnVue', BtnVue)
    .component('NavbarVue', navbar)
    .mount('#app')
