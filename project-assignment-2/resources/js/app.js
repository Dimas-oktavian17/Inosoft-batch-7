import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import App from '@/App.vue'
import BtnVue from '@/base/button.vue'
import navbar from '@/navbar/navbar.vue'
import footer from '@/footer/footer.vue'
import cart from '@/logic/cart.vue'
import checkout from '@/logic/checkout.vue'
const app = createApp()
app.component('IconVue', Icon)
    .component('DefaultLayout', DefaultLayout)
    .component('App', App)
    .component('BtnVue', BtnVue)
    .component('NavbarVue', navbar)
    .component('FooterVue', footer)
    .component('CartVue', cart)
    .component('CheckoutVue', checkout)
    .mount('#app')
