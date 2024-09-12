<script setup lang="ts">
import Projects from '@/components/Projects.vue';
</script>

<template>
  <!-- Title -->
  <div
    class="relative flex flex-col justify-center items-center py-4 px-4 pt-4 bg-gray-800 shadow-2xl"
  >
    <h2 class="text-center font-mainFont -mb-2 opacity-70 text-orange-200">
      proficiency
    </h2>
    <div class="flex flex-row items-center w-full">
      <div class="w-full h-3 rounded-full bg-orange-400"></div>
      <h1 class="my-3 text-6xl mx-6 font-terFont text-[#ff3c23]">Programing</h1>
      <div class="w-full h-3 rounded-full bg-orange-400"></div>
    </div>
    <!-- Icons -->
    <div class="flex justify-evenly flex-wrap gap-3 mt-2 mb-6">
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconFigma.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconVs.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconJs.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconVitejs.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconVue.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconTailWind.webp" alt="" />
      </div>
    </div>
    <!-- final effect -->
    <img
      class="absolute -bottom-[2px] w-full"
      src="../assets/fundo.webp"
      alt=""
    />
  </div>
  <!-- Content -->
  <div
    class="h-full pt-10 py-4 px-4 text-center font-secFont text-xl bg-gray-100"
  >
    <p class="opacity-70 text-base">
      I develop programming solutions that combine design innovation with a
      clean and efficient code structure, always analyzing the best trends in
      current technologies.
      <br> My goal is to capture the user's attention from the
      first interaction, delivering results that are both visually appealing and
      technically flawless.
    </p>
    <Projects />
  </div>
</template>
