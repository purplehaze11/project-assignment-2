<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                    </h1>
                    <ActionButton
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div class="modal-body">
                    <ul class="list-group">
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
                    </ul>
                </div>
                <div class="modal-footer">
                    <ActionButton class="btn-danger" text="Reset Cart" />
                    <ActionButton
                        class="btn-primary"
                        text="Beli"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProductInCart from "./ProductInCart.vue";

export default {
    name: "CartModal",
    components: {
        ActionButton,
        ProductInCart,
    },
    props: {
        products: {
            type: Array,
        },
    },
    methods: {
        resetCart() {},
    },
};
</script>
