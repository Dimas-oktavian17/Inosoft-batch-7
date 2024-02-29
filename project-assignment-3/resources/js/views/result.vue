<script setup>
import { computed } from 'vue'
import { Products } from '../store/productStore';
import { RouterLink } from 'vue-router'


const cartData = computed(() => Products.state.cart);
</script>

<template>
    <div>
        <RouterLink to="/Learn">
            Back to Products
        </RouterLink>
        {{ cartData }}
        <ul>
            <li v-for="item in cartData" :key="item.id">
                {{ item.title }} {{ item.price }} (Quantity: {{ item.stok }})
            </li>
        </ul>
    </div>
</template>
