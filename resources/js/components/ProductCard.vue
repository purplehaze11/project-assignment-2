<template>
    <div class="card" style="width: 18rem">
        <img
            src="https://placehold.co/600x400"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: Rp. {{ product.harga }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 card-text">Stock: {{ product.stok }}</p>
                <ActionButton
                    v-if="product.stok != 0"
                    @click="reduceStock"
                    class="btn-primary"
                    text="Add to cart"
                />
                <ActionButton
                    v-else
                    class="btn-danger"
                    text="Stok habis"
                    disabled
                />
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import { store } from "../store.js";

export default {
    name: "ProductCard",
    components: {
        ActionButton,
    },
    data() {
        return {
            store,
        };
    },
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        reduceStock() {
            this.product.stok -= 1;
            this.product.inCart += 1;
            store.incrementTotalInCart();
            store.incrementTotalPrice(this.product.harga);
            store.isAlreadyBought = false;
        },
    },
};
</script>

<style scoped>
.card {
    border: 1px solid black;
    margin: 2rem 0;
    background-color: #f2fbfc;
}
</style>
