<template>
    <div class="flex-row d-flex justify-content-between align-items-center">
        <p>{{ product.name }}</p>
        <div class="flex-row d-flex">
            <ActionButton
                class="btn-secondary"
                @click="reduceProductInCart"
                text="-"
            />
            <div
                id="numbersOfProduct"
                class="d-flex align-items-center justify-content-center"
            >
                <p>{{ product.inCart }}</p>
            </div>
            <ActionButton
                class="btn-danger"
                @click="clearProductInCart"
                text="clear"
            />
        </div>
        <p>{{ product.harga }}</p>
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
            store.reduceTotalPrice(this.product.harga);
        },
        clearProductInCart() {
            this.product.stok += this.product.inCart;
            store.reduceTotalByProduct(this.product.inCart);
            store.clearTotalPrice(this.product.harga, this.product.inCart);
            this.product.inCart = 0;
        },
    },
};
</script>

<style scoped>
p {
    margin: 0;
}

#numbersOfProduct {
    width: 2rem;
}
</style>
