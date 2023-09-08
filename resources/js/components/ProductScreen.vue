<template>
    <div class="flex-wrap d-flex justify-content-around">
        <ProductCard
            v-for="product in products"
            :product="product"
            :key="product.id"
        />
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
    name: "ProductScreen",
    components: {
        ProductCard,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
};
</script>
