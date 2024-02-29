import { ref, reactive } from 'vue'
import axios from 'axios';
import { createStore } from 'vuex';

export const Products = createStore({
    state: {
        data: reactive([]), // Add a state property to store the fetched data
        cart: reactive([])
    },
    getters: {
        getData: (state) => state.data, // Add a getter to retrieve the data
        getCart: (state) => state.cart,
    },
    mutations: {
        // Add a mutation to update the data state
        UPDATE_DATA(state, data) {
            state.data = data;
        },
        UPDATE_CART(state, { title, price, stok }, ProductMenu) {
            // const a = state.cart.push({ title, price, stok });

            if (ProductMenu.stok > 0) {
                ProductMenu.stok--;

                // const existingCartItem = state.cart.find((item) => item.nama === title);

                if (state.cart.find((item) => item.title === title)) {
                    ProductMenu.jumlah++;
                } else {
                    state.cart.push({
                        nama: title,
                        harga: Number(price),
                        jumlah: Number(1),
                    });
                }
            }
            // productMenu.stok === 0 ? (productMenu.status = false) : (productMenu.status = true);
        }
        // if (productMenu && stok > 0) {
        //     productMenu.stok--
        //     state.cart.value.push({
        //         nama: title,
        //         harga: Number(price),
        //         jumlah: Number(1)
        //     })
        //     productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
        // }
    },
    actions: {
        async getAllData(context) {
            try {
                let response = await axios.get("api/getAllData");
                context.commit("UPDATE_DATA", response.data); // Update with the correct property
                return response.data
            } catch (error) {
                console.error(error);
            }
        },
        async postData(context, payload) {
            try {
                let response = await axios.post("api/postData", payload);
                context.commit("UPDATE_DATA", response.data); // Update with the correct property
                return response.data
            } catch (error) {
                console.error(error);
            }
        },
        async handleProduct(context, { title, price, stok }) {
            const ProductMenu = this.state.data.find((item) => item.nama === title);
            // const existingCartItem = state.cart.find((item) => item.nama === title);

            context.commit("UPDATE_CART", { title, price, stok }, ProductMenu);

        }
    },
});
