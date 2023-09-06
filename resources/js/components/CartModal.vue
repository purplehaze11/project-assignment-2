<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                    </h1>
                    <ActionButton
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                    <ActionButton class="btn-danger" text="Reset Cart" />
                    <ActionButton class="btn-primary" text="Beli" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: "CartModal",
    components: {
        ActionButton,
    },
};
</script>
