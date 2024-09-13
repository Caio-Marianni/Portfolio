<template>
  <!-- Title -->
  <div
    class="relative flex flex-col justify-center items-center py-4 px-4 pt-4 bg-[#141414] shadow-2xl"
  >
    <h2 class="text-center font-mainFont -mb-2 text-orange-200">proficiency</h2>
    <div class="flex flex-row items-center w-full">
      <div class="w-full h-1 rounded-full bg-orange-400"></div>
      <h1 class="my-3 text-6xl mx-6 font-terFont text-orange-600">Designer</h1>
      <div class="w-full h-1 rounded-full bg-orange-400"></div>
    </div>
    <!-- Icons -->
    <div class="flex justify-evenly flex-wrap gap-3 mt-2 mb-6">
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
  <div
    class="h-full pt-10 py-4 px-4 text-center font-secFont text-lg bg-gray-200"
  >
    <p class="mb-10">
      I create design solutions that shape corporate and personal brand identities using Figma, Photoshop, and Illustrator. My process focuses on translating the essence of a product or brand into compelling visuals that effectively communicate its core message and values.x
    </p>
    <!-- Projects -->
    <div class="flex flex-col">
      <div class="relative flex flex-col items-center justify-center w-auto h-80 rounded-md">
        <div class="h-[90%] flex flex-col rounded-xl overflow-hidden">
          <img class="h-full object-contain" src="../assets/anuncioProject.webp" alt="">
        </div>
        <p class="mt-2">legenda</p>
      </div>
      <div class="relative flex flex-col items-center justify-center w-auto h-80 rounded-md">
        <div class="h-[90%] flex flex-col rounded-xl overflow-hidden">
          <img class="h-full object-contain" src="../assets/anuncioProject2.webp" alt="">
        </div>
        <p class="mt-2">legenda</p>
      </div>
      <div class="relative flex flex-col items-center justify-center w-auto h-80 rounded-md">
        <div class="h-[90%] flex flex-col rounded-xl overflow-hidden">
          <img class="h-full object-contain" src="../assets/anuncioProject3.webp" alt="">
        </div>
        <p class="mt-2">legenda</p>
      </div>
      <div class="relative flex flex-col items-center justify-center w-auto h-80 rounded-md">
        <div class="h-[90%] flex flex-col rounded-xl overflow-hidden">
          <img class="h-full object-contain" src="../assets/anuncioProject4.webp" alt="">
        </div>
        <p class="mt-2">legenda</p>
      </div>
    </div>
  </div>
</template>
