<script setup>
import axios from 'axios';
import { computed, ref } from 'vue'
import { Products } from '../store/productStore';
const Productss = ref([])
const Cart = ref([])
const name = ref('')
const getData = async () => {
    // with vuex
    // await Products.dispatch("getAllData")
    // not vuex
    try {
        let response = await axios.get("api/getAllData");
        // context.commit("UPDATE_DATA", response.data); // Update with the correct property
        // return response.data
        Productss.value.push(response.data.data)
        // console.log(response.data.data);
        console.log(Productss.value);
    } catch (error) {
        console.error(error);
    }
}
const postData = async () => {
    try {
        await Products.dispatch("postData", { username: name.value });
        await getData(); // Refresh data after posting
    } catch (error) {
        console.error(error);
    }
}
const handleProduct = (title, price, stok) => {
    // Products.dispatch('handleProduct', { title, price, stok })
    // no vuex
    // const a = state.cart.push({ title, price, stok });

    const productMenu = Producssss.value.find((item) => item.title === title)

    if (stok > 0) {
        productMenu.stok--
        Cart.value.push({
            nama: title,
            harga: Number(price),
            jumlah: Number(1)
        })
        // productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
    }
}
const data = computed(() => Products.state.data)
const Producssss = computed(() => Productss.value.flat())
// no vuex
// onMounted(() => {
//     return getData()
// }),
</script>

<template>
    <div class="text-white">
        <RouterLink to="/Result">
            Go to Cart
        </RouterLink>
        <button class="btn btn-primary" @click="getData">
            Get Data
        </button>
        <input type="text" v-model="name" />
        <button class="btn btn-success" @click="postData">
            Post Data
        </button>
        {{ Producssss }}
        <ul>
            <li v-for="({
                logo,
                title,
                deskripsi,
                price,
                stok,
                checkout,
                status,
                id
            }) in Producssss" :key="id">
                {{ title }} - {{ price }} - {{ stok }} - (ID: {{ id }})
                <button @click="handleProduct(title, price, stok)">
                    Checkout {{ stok }}
                </button>
            </li>
        </ul>
        <!-- <ul>
          <li v-for="(nestedArray, outerIndex) in Producssss" :key="outerIndex">
            <ul>
              <li v-for="(item, innerIndex) in nestedArray" :key="innerIndex">
                {{ item.title }} - (ID: {{ outerIndex }}-{{ innerIndex }})
                <button @click="handleProduct(item.title, item.price, item.stok)">
                  Checkout
                </button>
              </li>
            </ul>
          </li>
        </ul>
 -->

        <ul>
            <li v-for="({ nama, harga, jumlah }, id) in Cart" :key="id">
                {{ nama }} - {{ harga }} - {{ jumlah }}
            </li>
        </ul>
    </div>
</template>
