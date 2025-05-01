<script setup>
import Editor from 'primevue/editor';
import Button from 'primevue/button';
import { ref } from 'vue'
const editorValue = ref('')

</script>

<template>

    <div class="mainDiv">
        <div class="">
            <h1 class="text-center text-5xl text-[#000638] font-bold">Add New Blog</h1>
            <div class="card mt-10 flex flex-col gap-1 w-[95%] self-center">
                <Editor v-model="editorValue" name="content" editorStyle="height: 320px" />
            </div>
            <Button class="mt-10 w-[95%]" type="submit" severity="secondary" label="Post" />
    </div>
    </div>

</template>

<style scoped>
    .mainDiv{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: 'center'
    }
    ::v-deep(.ql-toolbar.ql-snow) {
        border: 1px solid #b7d2f5;
    }
    ::v-deep(.p-editor-content.ql-container.ql-snow) {
        border: 1px solid #b7d2f5;
        border-top: 0px 
    }
    ::v-deep(.p-button.p-button-secondary, .p-button-group.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button) {
        border: 1px solid #b7d2f5
    }
    ::v-deep(.p-button-label){
        font-weight: 700;
    }
</style>
<!-- shadow-md shadow-lg shadow-xl -->