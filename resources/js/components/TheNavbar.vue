<template>
    <div id="navbar" class="d-flex justify-content-center">
        <h1>Tosa</h1>
        <button
            class="btn btn-primary position-relative"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16"
            >
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                />
            </svg>
            <span
                v-if="store.totalInCart > 0"
                class="top-0 position-absolute start-100 translate-middle badge rounded-pill bg-danger"
            >
                {{ store.totalInCart }}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    </div>
</template>

<script>
import { store } from "../store.js";

export default {
    name: "TheNavbar",
    data() {
        return {
            store,
        };
    },
};
</script>

<style scoped>
#navbar {
    padding-top: 1rem;
    background-color: #f2fbfc;
    border-bottom: 1px solid black;
}

h1 {
    color: red;
}

button {
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
}
</style>
