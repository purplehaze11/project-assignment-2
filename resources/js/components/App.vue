<template>
    <TheNavbar />
    <ProductScreen :products="products" />
    <CartModal />
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import ProductScreen from "./ProductScreen.vue";
import CartModal from "./CartModal.vue";

export default {
    name: "App",
    components: {
        TheNavbar,
        ProductScreen,
        CartModal,
    },
    data() {
        return {
            products: [
                {
                    id: "1",
                    name: "Buku Tulis",
                    harga: "12.000",
                    stok: 250,
                },
                {
                    id: "2",
                    name: "Jaket hitam",
                    harga: "149.000",
                    stok: 24,
                },
                {
                    id: "3",
                    name: "Sepatu Merah",
                    harga: "210.000",
                    stok: 15,
                },
                {
                    id: "4",
                    name: "Lemari Kayu",
                    harga: "430.000",
                    stok: 1,
                },
                {
                    id: "5",
                    name: "Televisi",
                    harga: "2.200.000",
                    stok: 5,
                },
                {
                    id: "6",
                    name: "Gorden",
                    harga: "320.000",
                    stok: 7,
                },
            ],
        };
    },
};
</script>
