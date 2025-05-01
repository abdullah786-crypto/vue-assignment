<script setup>
import BlogPost from './BlogPost/blogPost.vue';
import './style.css'

</script>

<template>

    <div v-bind:class="'mainDiv'">
        <h1 v-bind:class="'mainHeading'">The Food Ninja Blog App</h1>
        <p v-bind:class="'subHeader'">A blog about food, experiences, and recipes</p>
        <input v-bind:class="'searchField'" placeholder="Search for acticles" />
        <BlogPost />
    </div>


</template>
<style>

</style>