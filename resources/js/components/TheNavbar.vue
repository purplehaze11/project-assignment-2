<template>
    <div id="navbar">
        <h1>Tosa</h1>
        <ActionButton data-bs-toggle="modal" data-bs-target="#exampleModal" text="Cart" />
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "TheNavbar",
    components: {
        ActionButton,
    },
};
</script>

<style scoped>
#navbar {
    display: flex;
}
</style>
