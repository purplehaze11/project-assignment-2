<template>
    <button class="btn btn-primary">{{ text }}</button>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        text: {
            type: String,
            required: false,
        },
    },
};
</script>
