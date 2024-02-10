<script setup>
defineEmits(['handleCheckout'])
</script>

<template>
    <BtnVue @click="$emit('handleCheckout')" title="Checkout" styleBtn="btn btn-success " />
</template>
