<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="relative font-terFont overflow-hidden md:mt-8 py-4 mt-8 px-5 rounded-[20px] border-black border-2 mb-2">
    <h1 class="text-5xl">Home<span class="text-gray text-2xl font-medium">/</span></h1>
    <ul class="flex gap-8 text-gray-400">
      <li class="hover:text-black transition-all duration-150"><RouterLink to="">programing</RouterLink></li>
      <li class="hover:text-black transition-all duration-150"><RouterLink to="">designer</RouterLink></li>
      <li class="hover:text-black transition-all duration-150"><RouterLink to="">dj</RouterLink></li>
    </ul>
    <img class="-z-10 absolute w-32 top-0 -translate-x-5 -translate-y-5" src="../assets/coner.png" alt="">
  </div>
</template>