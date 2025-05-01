<script setup>
import Card from 'primevue/card';
// defineProps
import { defineProps } from 'vue';

const props = defineProps(['imgUrl', 'title', 'subtitle'])

</script>

<template>

    <Card style="width: 100%; overflow: hidden">
        <template #header>
            <img alt="user header"
                :src="imgUrl" />
        </template>
        <template #title>
            {{ title }}
        </template>
        <template :class="'text-justify'" #subtitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio quasi? Debitis provident similique incidunt.
        </template>
        <template #footer>
            <div class="mt-2">
                <Button @click="console.log('Button clicked successfully')"
                    :class="'bg-black text-white w-full p-2 rounded-lg rounded-sm rounded-xl cursor-pointer'"> View
                </Button>
            </div>
        </template>
    </Card>
</template>

<style scoped>
::v-deep(.p-card-body) {
  text-align: justify;
  gap: 5px;
  padding: 15px;
}
</style>