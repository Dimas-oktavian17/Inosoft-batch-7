import { ref, reactive } from 'vue'
import axios from 'axios';
import { createStore } from 'vuex';

export const Products = createStore({
    state: {
        data: reactive([]), // Add a state property to store the fetched data
        cart: reactive([])
    },
    getters: {
        getData: (state) => state.data.flat(), // Add a getter to retrieve the data
        getCart: (state) => state.cart,
    },
    mutations: {
        // Add a mutation to update the data state
        UPDATE_DATA(state, data) {
            state.data = data;
        },
        UPDATE_CART(state, { title, price, stok }) {
            state.cart.push({
                nama: title,
                harga: Number(price),
                jumlah: Number(1)
            })
        }
    },
    actions: {
        async getAllData(context) {
            try {
                let response = await axios.get("api/getAllData");
                context.commit("UPDATE_DATA", response.data.data); // Update with the correct property
                return response.data
            } catch (error) {
                console.error(error);
            }
        },
        async handleProduct(context, { title, price, stok }) {
            const productMenu = this.getters.getData.find((item) => item.title === title)
            console.log(productMenu);
            if (stok > 0) {
                productMenu.stok--
                context.commit("UPDATE_CART", { title, price, stok });
                productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
            }
        },
    },
});
