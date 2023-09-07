import { reactive } from "vue";

export const store = reactive({
    totalInCart: 0,
    incrementTotalInCart() {
        this.totalInCart++;
    },
});
