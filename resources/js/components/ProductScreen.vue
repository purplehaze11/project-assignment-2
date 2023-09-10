<template>
    <div class="flex-wrap d-flex justify-content-evenly">
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

<style scoped>
div {
    background-color: #f2f3f5;
}
</style>
