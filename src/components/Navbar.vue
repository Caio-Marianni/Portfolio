<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="flex items-center w-full mt-6 rounded-[20px] overflow-hidden shadow-2xl">
    <!-- Navigation -->
    <div class="relative w-full bg-gray-800 h-[110px] py-5 pl-5 rounded-l-[20px] font-terFont">
      <h1 class="absolute z-10 text-5xl text-white">Home<span class="text-gray text-2xl font-medium">/</span></h1>
      <ul class="absolute z-10 bottom-4 flex gap-8 text-gray-400">
        <li class="hover:text-orange-500 transition-all duration-150"><RouterLink to="">programing</RouterLink></li>
        <li class="hover:text-orange-500 transition-all duration-150"><RouterLink to="">designer</RouterLink></li>
        <li class="hover:text-orange-500 transition-all duration-150"><RouterLink to="">dj</RouterLink></li>
      </ul>
      <!-- Border Detail -->
      <img class="absolute w-32 top-0 -translate-x-8 -translate-y-5" src="../assets/coner.png" alt="">
    </div>
    <!-- Final Detail -->
    <img class="h-[110px] w-[300px]" src="../assets/final.webp" alt="">
  </div>
</template>