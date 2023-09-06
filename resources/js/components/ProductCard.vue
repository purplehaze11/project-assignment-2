<template>
    <div class="card" style="width: 18rem">
        <img src="https://placehold.co/600x400" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <div>
                <p class="card-text">harga: {{ product.harga }}</p>
                <p class="card-text">stok: {{ product.stok }}</p>
                <ActionButton class="btn-primary" />
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "ProductCard",
    components: {
        ActionButton,
    },
    props: {
        product: {
            type: Object,
        },
    },
};
</script>
