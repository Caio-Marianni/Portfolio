<template>
  <div
    class="h-auto sticky top-4 pb-4 rounded-[20px] border-black border-2 overflow-hidden"
  >
    <!-- Banner part -->
    <div>
      <img
        class="h-20 object-cover w-full"
        src="../assets/background.webp"
        alt="background"
      />
      <img
        class="w-32 m-auto -translate-y-14 rounded-full"
        src="../assets/profile.webp"
        alt="personal-pic"
      />
      <img
        class="w-16 m-auto -translate-y-20"
        src="../assets/logo.webp"
        alt="logo"
      />
    </div>
    <!-- info part -->
    <div class="px-4 -mt-20">
      <!-- Dowload Cv -->
      <div class="text-center py-4 mb-2">
        <a
          class="py-2 px-4 border-2 border-blue-700 rounded-full"
          href="#"
          download="Document"
        >
          portifolio
        </a>
      </div>
      <!-- info -->
      <div class="flex flex-row flex-wrap justify-around gap-2">
        <div class="flex items-center">
          <img class="w-8 h-8 md:w-9 md:h-9" src="../assets/flag.webp" alt="flag" />
          <p>Brazil</p>
        </div>
        <div class="flex items-center">
          <img class="w-8 h-8 md:w-9 md:h-9" src="../assets/tranlate.webp" alt="flag" />
          <p>English / Portugues</p>
        </div>
      </div>
      <h2 class="font-bold mt-5">Caio Marianni</h2>
      <p class="font-light mb-2">
        Many call me Marianni, but you can call me whatever you like. I am a
        curious 21 year old who always seeks to learn more about the things I
        have contact with, how they work and how to improve them.
      </p>
    </div>
  </div>
</template>
