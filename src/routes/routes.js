import AddNewPost from "@/Components/BlogPost/addNewPost.vue";
import MainFile from "@/Components/mainFile.vue";
import { createWebHistory, createRouter } from "vue-router";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: MainFile,
    },

    {
        path: '/add-new-post',
        name: 'addNewPost',
        component: AddNewPost,
    }
];

const routers = createRouter({
    history: createWebHistory(),
    routes
})

export default routers;
