 <script setup>
import { RouterLink, RouterView } from 'vue-router'

// import Login from 'Login.vue';
import CreateAccount from './components/CreateAccount.vue';
</script>

<!-- <template>
  <create.vue />
   
  <RouterView /> -->
<!-- </template>

<style scoped>
</style> -->

<template>
  <!-- <Login /> -->
  <header class="bg-teal-700 text-white py-4 px-6 flex justify-between items-center">
      <h1 class="text-xl font-bold italic">Eventful Moments.</h1>
      <nav>
        <button class="mr-4 hover:underline">Logout</button>
        <button class="hover:underline">My Bucket</button>
      </nav>
    </header>
  <RouterView />

  <footer class="text-right py-4 mt-6 bg-teal-400 text-sm">
      Eventful Moments by Ruth Iroanusi
    </footer>
</template>


<style scoped>
</style> 