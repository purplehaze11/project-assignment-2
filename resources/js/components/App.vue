<template>
    <TheNavbar @buttonSwitch="modalSwitch" />
    <ProductScreen />
    <CartModal />
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import ProductScreen from "./ProductScreen.vue";
import CartModal from "./CartModal.vue";

export default {
    name: "App",
    data() {
        return {
            modal: false,
        };
    },
    components: {
        TheNavbar,
        ProductScreen,
        CartModal,
    },
};
</script>
