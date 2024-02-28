<script setup>
import { Products } from '../store/productStore';
</script>
<template>
    <h1 class="text-light">{{ Products.state.count }} page Product</h1>
</template>
