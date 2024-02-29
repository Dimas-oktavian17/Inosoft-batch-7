<script setup>
import { Products } from '../store/productStore';
import { computed, ref } from 'vue'
const dataProducts = computed(() => Products.getters.getCart)
</script>
<template>
    <RouterLink to="/">
        Back
    </RouterLink>
    <article id="menu"
        class="container row pt-5 text-light flex-column  flex-lg-row d-flex justify-content-center  align-items-center ">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody v-for="({ nama, harga, jumlah, index }) in dataProducts" :key="index">
                <tr>
                    <th scope="row">{{ nama }}</th>
                    <td>{{ jumlah }}</td>
                    <td>Rp.{{ harga }}</td>
                    <td>
                        <!-- <BtnVue title="Delete All" styleBtn="btn btn-danger me-lg-2"
                            @deleteList="deleteProduct(nama, harga, jumlah)" />
                        <span class="text-dark ">-</span>
                        <BtnVue title="Delete one" styleBtn="btn btn-danger" @deleteList="deleteProductOne(nama)" /> -->
                    </td>
                </tr>
            </tbody>
            <!-- <tbody>
                <tr>
                    <th scope="row">Total:</th>
                    <td></td>
                    <td>Rp.{{ TotalCheckout }}</td>
                    <td></td>
                </tr>
            </tbody>
            <CheckoutVue :total="TotalCheckout" /> -->
        </table>
    </article>
</template>
