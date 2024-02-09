<script setup>
import { reactive, toRefs, computed } from 'vue';
defineProps(['title'])

const listMenu = reactive([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.',
        price: 3900,
        stok: 10,
        checkout: 'Add to cart'
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`,
        price: 10000,
        stok: 80,
        checkout: 'Add to cart'
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`,
        price: 1500,
        stok: 3,
        checkout: 'Add to cart'
    }
])

</script>

<template>
    <!-- menu section -->
    <aside class="row text-light pt-10">
        <div class="col-12 text-center ">
            <header class="text-light h1 fw-semibold">{{ title }}</header>
        </div>
    </aside>
    <!-- list section -->
    <article id="menu"
        class="row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center ">
        <div v-for="({ title, logo, deskripsi, price, stok, checkout, index }) in listMenu" :key="index"
            class="col-lg-4 pt-5 pt-lg-0 ">
            <div class="card bg-dark">
                <div class="card-body">
                    <IconVue :icon="logo" class="text-light w-25 h-auto " />
                    <h5 class="card-title text-light">{{ title }}</h5>
                    <p class="card-text text-light">
                        {{ deskripsi }}
                    </p>
                    <p class="card-text text-light">
                        Stok: {{ stok }} || Price: Rp.{{ price }}
                    </p>
                    <BtnVue :title="checkout" styleBtn="btn btn-secondary" />
                </div>
            </div>
        </div>
    </article>
</template>
