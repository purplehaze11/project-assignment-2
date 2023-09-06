<template>
    <button type="button" class="btn">{{ text }}</button>
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
