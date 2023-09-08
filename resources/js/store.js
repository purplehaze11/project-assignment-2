import { reactive } from "vue";

export const store = reactive({
    totalInCart: 0,
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
