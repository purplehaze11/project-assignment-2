<template>
    <div>
        <ProductCard v-for="product in products" :product="product" :key="product.name" />
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
