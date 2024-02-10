<script setup>
import { reactive, ref, toRefs, computed } from 'vue';
defineProps(['TitleMenu', 'CheckoutMenu'])
const CheckoutData = ref([])
const listMenu = ref([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.',
        price: 3900,
        stok: 10,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`,
        price: 10000,
        stok: 80,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`,
        price: 1500,
        stok: 3,
        checkout: 'Add to cart',
        status: true
    }
])

const handleProduct = (title, price, stok) => {
    const productMenu = listMenu.value.find((item) => item.title === title)
    if (stok > 0) {
        productMenu.stok--
        CheckoutData.value.push({
            nama: title,
            harga: Number(price),
            jumlah: Number(1)
        })

        productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
    }
}
const listCheckout = computed(() => {
    return CheckoutData.value.reduce((acc, item) => {
        const existingItem = acc.find(i => i.nama === item.nama);
        if (existingItem) {
            // update jumlah & harga
            existingItem.jumlah += item.jumlah;
            existingItem.harga += item.harga;
        } else {
            // If the item is not in the accumulator, add it
            acc.push({ ...item });
        }
        return acc;
    }, [])
})
const deleteProduct = (nama, harga, jumlah, status, index) => {
    const productMenu = CheckoutData.value.find((item) => item.nama === nama);
    const listMenuItem = listMenu.value.find((item) => item.title === nama);

    if (productMenu && listMenuItem) {
        // update jumlah & harga
        productMenu.jumlah -= productMenu.jumlah;
        // productMenu.jumlah;
        productMenu.harga -= harga

        // update stok in listMenu
        listMenuItem.stok += jumlah
        // jumlah;

        // remove the product from CheckoutData if jumlah is 0
        if (productMenu.jumlah === 0) {
            listMenuItem.status = true
            CheckoutData.value = CheckoutData.value.filter((item) => item.nama !== nama);
        }
    } else {
        console.log('Product not found');
    }

    console.log(productMenu);
}
const deleteProduc = (nama) => {
    const productMenuIndex = CheckoutData.value.findIndex((item) => item.nama === nama);
    const listMenuItem = listMenu.value.find((item) => item.title === nama);

    if (productMenuIndex !== -1 && listMenuItem) {
        // Get the product from CheckoutData
        const productMenu = CheckoutData.value[productMenuIndex];

        // Decrease the quantity of the product by 1
        productMenu.jumlah -= 1;
        // Decrease the total price of the product by its unit price
        productMenu.harga -= listMenuItem.price;

        // Increase the stock of the product in listMenu by 1
        listMenuItem.stok += 1;

        // If the quantity of the product becomes 0, remove it from the cart
        if (productMenu.jumlah === 0) {
            listMenuItem.status = true;
            CheckoutData.value.splice(productMenuIndex, 1);
        }
    } else {
        console.log('Product not found');
    }
}

const checkoutHandler = () => console.log('tes ah');
</script>

<template>
    <!-- menu section -->
    <aside class="row text-light pt-10">
        <div class="col-12 text-center ">
            <header class="text-light h1 fw-semibold">{{ TitleMenu }}</header>
        </div>
    </aside>
    <!-- list section -->
    <article id="menu"
        class="row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center ">
        <div v-for="({ title, logo, deskripsi, price, stok, checkout, status, index }) in listMenu" :key="index"
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
                    <BtnVue :disabled="status === false" :title="checkout" styleBtn="btn btn-secondary"
                        @click="handleProduct(title, price, stok)" />
                </div>
            </div>
        </div>
    </article>
    <!--  header -->
    <aside class="row text-light pt-10">
        <div class="col-12 text-center ">
            <header class="text-light h1 fw-semibold">{{ CheckoutMenu }}</header>
        </div>
    </aside>
    <!-- list section -->
    <article id="menu"
        class="container row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center ">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody v-for="({ nama, harga, jumlah, status, index }) in listCheckout" :key="index">
                <tr>
                    <th scope="row">{{ nama }}</th>
                    <td>{{ jumlah }}</td>
                    <td>Rp.{{ harga }}</td>
                    <td>
                        <BtnVue title="Delete All" styleBtn="btn btn-danger"
                            @deleteList="deleteProduct(nama, harga, jumlah, status, index)" />
                        <BtnVue title="Delete one" styleBtn="btn btn-danger" @deleteList="deleteProduc(nama)" />
                    </td>
                </tr>
            </tbody>
        </table>
        <CheckoutVue @handleCheckout="checkoutHandler" />
    </article>
</template>

<style scoped>
.pt-10 {
    padding-top: 10rem;
}
</style>
