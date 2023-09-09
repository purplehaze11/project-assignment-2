import { reactive } from "vue";

export const store = reactive({
    totalPrice: 0,

    totalInCart: 0,

    isAlreadyBought: false,

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

    resetTotal() {
        this.totalInCart = 0;
        this.totalPrice = 0;
    },

    resetInCartData(arr) {
        for (let element of arr) {
            element.inCart = 0;
        }
    },
});
