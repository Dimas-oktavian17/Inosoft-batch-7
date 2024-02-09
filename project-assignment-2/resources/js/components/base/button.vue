<script setup>
const props = defineProps(
    {
        title: {
            type: String,
            required: true
        },
        styleBtn: {
            type: String,
            required: true
        },
    },
)
const { title, styleBtn } = props
</script>

<template>
    <button type="button" :class="styleBtn">
        {{ title }}
    </button>
</template>
