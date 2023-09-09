<template>
    <div
        class="modal fade"
        id="cartModal"
        tabindex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="cartModalLabel">
                        Your Cart
                    </h1>
                    <ActionButton
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div class="modal-body">
                    <ul class="list-group" v-if="store.totalInCart > 0">
                        <template
                            v-for="product in products"
                            :product="product"
                            :key="product.id"
                        >
                            <li
                                class="list-group-item"
                                v-if="product.inCart > 0"
                            >
                                <ProductInCart :product="product" />
                            </li>
                        </template>
                        <li class="list-group-item">
                            <TotalPrice />
                        </li>
                    </ul>
                    <p
                        v-else-if="
                            store.isAlreadyBought == true &&
                            store.totalInCart == 0
                        "
                    >
                        Thank you for using Tosa!
                    </p>
                    <p v-else>You have no product in the cart</p>
                </div>
                <div class="modal-footer">
                    <ActionButton
                        class="btn-success"
                        text="Buy"
                        @click="buyProduct"
                        v-if="store.totalInCart > 0"
                    />
                    <ActionButton
                        class="btn-success"
                        text="Buy"
                        v-else
                        disabled
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProductInCart from "./ProductInCart.vue";
import TotalPrice from "./TotalPrice.vue";
import { store } from "../store.js";

export default {
    name: "CartModal",
    components: {
        ActionButton,
        ProductInCart,
        TotalPrice,
    },
    props: {
        products: {
            type: Array,
        },
    },
    methods: {
        buyProduct() {
            store.resetTotal();
            store.resetInCartData(this.products);
            store.isAlreadyBought = true;
        },
    },
    data() {
        return {
            store,
        };
    },
};
</script>
