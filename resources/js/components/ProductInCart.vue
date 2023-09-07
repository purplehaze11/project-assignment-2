<template>
    <div>
        <p>{{ product.name }}</p>
        <p>{{ product.harga }}</p>
        <button>substract by 1</button>
        <p>{{ product.inCart }}</p>
        <button>clear</button>
    </div>
</template>

<script>
export default {
    name: "ProductInCart",
    props: {
        product: {
            type: Object,
        },
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
}
</style>
