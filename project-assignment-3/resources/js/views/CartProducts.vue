<script setup>
import { Products } from '../store/productStore';
import { computed, ref } from 'vue'
const dataProducts = computed(() => Products.getters.getCart)
const realCheckout = computed(() => Products.getters.listCheckout)
const TotalCheckout = computed(() => Products.getters.TotalCheckout)
const deleteProduct = (nama, harga, jumlah) => Products.dispatch("deleteProduct", { nama, harga, jumlah })
const deleteProductOne = (nama) => Products.dispatch("deleteProductOne", { nama })
</script>
<template>
    <DefaultLayout>
        <RouterLink to="/">
            Back
        </RouterLink>
        <!-- <article id="menu"
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
                <tbody v-for="({ nama, harga, jumlah, index }) in realCheckout" :key="index">
                    <tr>
                        <th scope="row">{{ nama }}</th>
                        <td>{{ jumlah }}</td>
                        <td>Rp.{{ harga }}</td>
                        <td>
                            <BtnVue title="Delete All" styleBtn="btn btn-danger me-lg-2"
                                @deleteList="deleteProduct(nama, harga, jumlah)" />
                            <span class="text-dark ">-</span>
                            <BtnVue title="Delete one" styleBtn="btn btn-danger" @deleteList="deleteProductOne(nama)" />
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">Total:</th>
                        <td></td>
                        <td>Rp.{{ TotalCheckout }}</td>
                        <td></td>
                    </tr>
                </tbody>
                <CheckoutVue :total="TotalCheckout" />
            </table>
        </article> -->
        <article
            class="container row pt-5 text-light  d-flex  flex-column justify-content-center  align-items-center flex-lg-row justify-content-lg-start    align-items-lg-start   ">
            <div class="col-lg-6 col-12">
                <div class="card bg-dark mb-3" v-for="({ nama, harga, jumlah, logo, index }) in realCheckout" :key="index">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex  justify-content-center  align-items-center">
                            <IconVue :icon="logo" class="text-light img-fluid rounded-start" width="100" height="100" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-light ">
                                <div class="d-flex flex-row justify-content-between ">
                                    <h5 class="card-title">{{ nama }}</h5>
                                    <h6 class="card-title fw-bold">Rp.{{ harga }}</h6>
                                </div>
                                <div class="d-flex flex-row justify-content-between py-3">
                                    <p class="card-text p-1 bg-success  rounded">Quantity: {{ jumlah }}</p>
                                </div>
                                <div class="d-flex flex-row justify-content-lg-between  justify-content-start  ">
                                    <BtnVue title="Delete One" styleBtn="btn btn-danger me-lg-2"
                                        @deleteList="deleteProductOne(nama)" />
                                    <span class=" m-4 m-lg-0 "></span>
                                    <BtnVue title="Delete All" styleBtn="btn btn-danger me-lg-2"
                                        @deleteList="deleteProduct(nama, harga, jumlah)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6  col-12 position-sticky " style="top:150px ;">
                <div class="card w-full bg-dark ">
                    <div class="card-body text-light ">
                        <h5 class="card-title">Shopping summary</h5>
                        <div class="d-flex flex-row justify-content-between ">
                            <h5 class="card-title opacity-75 ">Total</h5>
                            <h6 class="card-title opacity-75  fw-bold">Rp.{{ TotalCheckout }}</h6>
                        </div>

                        <CheckoutVue :total="TotalCheckout" />
                    </div>
                </div>
            </div>
        </article>
    </DefaultLayout>
</template>
<style lang="css" scoped>
.CustomCard {
    max-width: 240px;
}

@media only screen and (min-width: 1024px) {
    .CustomCard {
        max-width: 540px;
    }
}
</style>
