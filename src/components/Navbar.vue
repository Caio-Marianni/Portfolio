<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="">
    <h1 class="font-bold text-4xl">Home<span class="text-gray text-2xl font-medium">/</span></h1>
    <ul class="flex gap-8">
      <li><RouterLink to="">programing</RouterLink></li>
      <li><RouterLink to="">designer</RouterLink></li>
      <li><RouterLink to="">dj</RouterLink></li>
    </ul>
  </div>
</template>