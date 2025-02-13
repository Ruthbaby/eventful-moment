 <script setup>
import { RouterLink, RouterView } from 'vue-router'
import { createApp } from 'vue';
import router from './router';
// import Login from 'Login.vue';
import CreateAccount from './components/CreateAccount.vue';
</script>

<!-- <template>
  <create.vue />
   
  <RouterView /> -->
<!-- </template>

<style scoped>
</style> -->

<script>

createApp({}).use(router).mount('#app');
</script>
<template>
  <!-- <Login /> -->
  <CreateAccount.vue />
  <RouterLink />
  <RouterView />
</template>


<style scoped>
</style> 