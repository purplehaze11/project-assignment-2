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
                    name: "Buku Tulis",
                    harga: "12.000",
                    stok: "250",
                },
                {
                    name: "Jaket hitam",
                    harga: "149.000",
                    stok: "24",
                },
                {
                    name: "Sepatu Merah",
                    harga: "210.000",
                    stok: "15",
                },
                {
                    name: "Lemari Kayu",
                    harga: "430.000",
                    stok: "3",
                },
                {
                    name: "Televisi",
                    harga: "2.200.000",
                    stok: "5",
                },
                {
                    name: "Gorden",
                    harga: "320.000",
                    stok: "20",
                },
            ],
        };
    },
};
</script>
