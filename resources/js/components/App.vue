<template>
    <TheNavbar />
    <ProductScreen :products="products" />
    <CartModal :products="products" />
    <BoughtModal />
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import ProductScreen from "./ProductScreen.vue";
import CartModal from "./CartModal.vue";
import BoughtModal from "./BoughtModal.vue";

export default {
    name: "App",
    components: {
        TheNavbar,
        ProductScreen,
        CartModal,
        BoughtModal,
    },
    data() {
        return {
            products: [
                {
                    id: "1",
                    name: "Buku Tulis",
                    harga: "12.000",
                    stok: 250,
                    inCart: 0,
                },
                {
                    id: "2",
                    name: "Jaket hitam",
                    harga: "149.000",
                    stok: 24,
                    inCart: 0,
                },
                {
                    id: "3",
                    name: "Sepatu Merah",
                    harga: "210.000",
                    stok: 15,
                    inCart: 0,
                },
                {
                    id: "4",
                    name: "Lemari Kayu",
                    harga: "430.000",
                    stok: 1,
                    inCart: 0,
                },
                {
                    id: "5",
                    name: "Televisi",
                    harga: "2.200.000",
                    stok: 5,
                    inCart: 0,
                },
                {
                    id: "6",
                    name: "Gorden",
                    harga: "320.000",
                    stok: 7,
                    inCart: 0,
                },
            ],
        };
    },
};
</script>
