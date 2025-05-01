<script setup>
import BlogPost from './BlogPost/blogPost.vue';
import '../assets/main.css'
import { ref } from 'vue';
import Button from 'primevue/button';
import { RouterLink, useRoute, useRouter } from 'vue-router';

// variables

const route = useRoute();
const router = useRouter();
const blogList = ref([
    {
        id: 1,
        title: 'ABC Title'
    },
    {
        id: 2,
        title: 'ABC Title'
    }, {
        id: 3,
        title: 'ABC Title'
    }, {
        id: 4,
        title: 'ABC Title'
    },
    {
        id: 5,
        title: 'ABC Title'
    },
    {
        id: 6,
        title: 'ABC Title'
    }, {
        id: 7,
        title: 'ABC Title'
    }, {
        id: 8,
        title: 'ABC Title'
    },
    {
        id: 9,
        title: 'ABC Title'
    },
    {
        id: 10,
        title: 'ABC Title'
    }, {
        id: 11,
        title: 'ABC Title'
    }, {
        id: 12,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    },
    {
        id: 13,
        title: 'ABC Title'
    }

])

const goAddNewPost = () => {
    router.push('/add-new-post')
}
</script>

<template>

    <div v-bind:class="'mainDiv'">
        <h1 v-bind:class="'mainHeading'">The Food Ninja Blog App
            <!-- <Button label="Add Post" /> -->
        </h1>
            <Button
                @click="goAddNewPost"
                :class="'bg-black text-center text-white w-[150px] p-2 rounded-lg rounded-sm rounded-xl cursor-pointer self-end'">
                <span class="p-button-label">Add Post</span>
            </Button>
        <p v-bind:class="'subHeader'">A blog about food, experiences, and recipes</p>
        <div class="w-full max-w-sm min-w-[200px]">
            <input
                class="mb-5 mt-5 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here...">
        </div>
        <div :style="{ minWidth: 'auto', maxWidth: '98%' }"
            class="grid x-sm:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 gap-10 mt-10">
            <div v-for="(blog, index) in blogList" :key="index" :class="'w-full'">
                <BlogPost :title="blog.title"
                    :imgUrl="'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg'" />
            </div>
        </div>

    </div>


</template>
<style>
.mainDiv {
    display: flex;
    flex-direction: column;
    width: 98%;
    padding: 20px;
    height: auto;
    margin: 40px 20px 20px 20px;
    justify-content: center;
    align-items: center;
}

.mainHeading {
    font-size: 48px;
    color: #000638;
    font-weight: 700;
    margin: 0px;
}

.subHeader {
    color: #605C59;
    font-size: 20px;
    font-weight: 400;
}

.searchField {
    width: 20%;
    margin-top: 20px;
    height: 50px;
    padding-left: 20px;
    border-radius: 10px;
}
</style>