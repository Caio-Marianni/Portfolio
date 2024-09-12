<template>
  <!-- Title -->
  <div
    class="relative flex flex-col justify-center items-center py-4 px-4 pt-4 bg-gray-800 shadow-2xl"
  >
    <h2 class="text-center font-mainFont -mb-2 opacity-70 text-orange-200">proficiency</h2>
    <div class="flex flex-row items-center w-full">
      <div class="w-full h-3 rounded-full bg-orange-400"></div>
      <h1 class="my-3 text-6xl mx-6 font-terFont text-[#ff3c23]">Designer</h1>
      <div class="w-full h-3 rounded-full bg-orange-400"></div>
    </div>
    <!-- Icons -->
    <div class="flex justify-evenly flex-wrap gap-3 mb-10">
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/illustrator.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconPhotoShop.webp" alt="" />
      </div>
      <div class="flex items-center justify-center w-8 h-8">
        <img src="../assets/iconFigma.webp" alt="" />
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
  <div class="h-full pt-16 py-4 px-4 text-center font-secFont text-xl bg-gray-100">
    <p>
descriçao
    </p>
  </div>
</template>
