<template>
    <div class="flex-row d-flex justify-content-between align-items-center">
        <p>{{ product.name }}</p>
        <p>{{ product.harga }}</p>
        <ActionButton
            class="btn-secondary"
            @click="reduceProductInCart"
            text="-"
        />
        <p>{{ product.inCart }}</p>
        <ActionButton
            class="btn-danger"
            @click="clearProductInCart"
            text="clear"
        />
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import { store } from "../store.js";

export default {
    name: "ProductInCart",
    props: {
        product: {
            type: Object,
        },
    },
    components: {
        ActionButton,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        reduceProductInCart() {
            this.product.inCart--;
            this.product.stok++;
            store.reduceTotalInCart();
        },
        clearProductInCart() {
            this.product.stok += this.product.inCart;
            store.reduceTotalByProduct(this.product.inCart);
            this.product.inCart = 0;
        },
    },
};
</script>

<style scoped>
p {
    margin: 0;
}
</style>
