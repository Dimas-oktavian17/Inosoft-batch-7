<script setup>
import { ref } from 'vue';
import { navItem } from '@/composable/component.js'
defineProps(['title'])
let hamburger = ref(false)
</script>

<template>
    <nav class="container navbar navbar-expand-lg bg-blur rounded fixed-top">
        <div class="container">
            <a class="navbar-brand text-light" href="#">
                <IconVue icon="mdi:food" />
                {{ title }}
            </a>
            <button @click="hamburger = !hamburger" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <IconVue icon="charm:cross" class="text-light " v-if="hamburger" />
                <IconVue icon="quill:hamburger" class="text-light " v-else />
            </button>
            <div :class="{ 'collapse ': !hamburger, 'navbar-collapse': true }" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="({ title, style, link, index }) in navItem" :key="index">
                        <a :class="style" :href="link">
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.bg-blur {
    /*background-color: #0F0F0F;*/
    backdrop-filter: blur(12px);
}
</style>
