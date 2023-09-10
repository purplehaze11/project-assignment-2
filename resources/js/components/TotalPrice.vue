<template>
    <div class="flex-row d-flex align-items-center justify-content-between">
        <p>
            Total Item <span>{{ store.totalInCart }}</span>
        </p>
        <p>
            Total Price <span>Rp. {{ store.totalPrice }}</span>
        </p>
    </div>
</template>

<script>
import { store } from "../store.js";

export default {
    name: "TotalPrice",
    data() {
        return {
            store,
        };
    },
};
</script>

<style scoped>
p {
    margin: 0;
}
</style>
