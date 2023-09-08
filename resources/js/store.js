import { reactive } from "vue";

export const store = reactive({
    totalPrice: 0,

    totalInCart: 0,

    incrementTotalPrice(price) {
        this.totalPrice += parseInt(price.split(".").join(""));
    },

    reduceTotalPrice(price) {
        this.totalPrice -= parseInt(price.split(".").join(""));
    },

    clearTotalPrice(price, qty) {
        this.totalPrice -= parseInt(price.split(".").join("")) * qty;
    },

    incrementTotalInCart() {
        this.totalInCart++;
    },

    reduceTotalInCart() {
        this.totalInCart--;
    },

    reduceTotalByProduct(num) {
        this.totalInCart -= num;
    },
});
