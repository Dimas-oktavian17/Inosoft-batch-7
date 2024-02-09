<script setup>
import { reactive } from 'vue';
const listMenu = reactive([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.'
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`
    }
])
</script>

<template>
    <DefaultLayout>
        <!-- <BtnVue title="ok" styleBtn="btn btn-primary" /> -->
        <!-- hero section -->
        <aside class="row text-light ">
            <div class="col-lg-6">
                <header class="text-light h1 fw-semibold">Restoran Pakcik Ueanakk</header>
                <footer class="py-1  text-light h6 fw-medium opacity-50 ">
                    Merupakan salah satu restoran terkemuka se antero Galaksii!!, kami menjual segala makanan dan minuman
                    yang mebuat anda semangatt!
                </footer>
                <a title="Let's Go!" class="btn btn-primary" href="#menu">
                    Let's Go!
                </a>
            </div>
            <div class="col-lg-6 ">
                <IconVue icon="mdi:food" class="w-50  h-auto   " />
            </div>
        </aside>
        <!-- menu section -->
        <aside class="row text-light pt-10">
            <div class="col-12 text-center ">
                <header class="text-light h1 fw-semibold">Menu Pakcik Ueanakk</header>
            </div>
        </aside>
        <!-- list section -->
        <article id="menu"
            class="row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center ">
            <div v-for="({ title, logo, deskripsi, index }) in listMenu" :key="index" class="col-lg-4 pt-5 pt-lg-0 ">
                <div class="card bg-dark">
                    <div class="card-body">
                        <IconVue :icon="logo" class="text-light w-25 h-auto " />
                        <h5 class="card-title text-light">{{ title }}</h5>
                        <p class="card-text text-light">
                            {{ deskripsi }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
        <article class="pt-10">
            <CartVue title="Semua Menu" />
            <CheckoutVue />
        </article>
    </DefaultLayout>
</template>

<style scoped>
.pt-10 {
    padding-top: 10rem;
}
</style>
