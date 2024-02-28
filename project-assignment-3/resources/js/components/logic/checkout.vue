<script setup>
import { ref, } from 'vue';
import Button from '../base/button.vue';
defineProps({
    total: {
        type: Number,
    }
})
const modal = ref(false)
</script>

<template>
    <BtnVue :disabled="total === 0" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="modal = !modal"
        title="Checkout" styleBtn="btn btn-success mt-5" />
    <div :class="[modal ? 'modal d-block' : 'd-none  modal']" id="staticBackdrop" data-bs-backdrop="static"
        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Total Belanjaan Pakcik</h1>
                    <button @click="modal = !modal" type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Rp.{{ total }}
                </div>
            </div>
        </div>
    </div>
</template>

