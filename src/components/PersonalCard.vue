<template>
  <div
    class="font-terFont h-auto sticky top-4 pb-4 rounded-[20px] max-w-96 border-black border-2 overflow-hidden"
  >
    <!-- Banner part -->
    <div>
      <img
        class="h-20 object-cover w-full"
        src="../assets/background.webp"
        alt="background"
      />
      <div class="flex flex-col justify-center items-center -mt-[65px]">
        <img
          class="w-32 rounded-full"
          src="../assets/profile.webp"
          alt="personal-pic"
        />
        <img
          class="w-16 -mt-8 "
          src="../assets/logo.webp"
          alt="logo"
        />
      </div>
      <!-- Dowload Cv -->
      <div class="text-center py-4 mb-20">
        <a
          class="py-2 px-4 border-2 border-blue-700 rounded-full"
          href="#"
          download="Document"
        >
          portifolio
        </a>
      </div>
    </div>
    <!-- info part -->
    <div class="px-4 -mt-20">
      <!-- info -->
      <div
        class="flex flex-col md:flex-row md:flex-wrap lg:justify-around gap-2 text-sm"
      >
        <div class="flex items-center lg:-ml-2">
          <img
            class="w-8 h-8 md:w-9 md:h-9"
            src="../assets/flag.webp"
            alt="flag"
          />
          <p>Brazil</p>
        </div>
        <div class="flex items-center">
          <img
            class="w-8 h-8 md:w-9 md:h-9"
            src="../assets/tranlate.webp"
            alt="flag"
          />
          <p>English / Portugues</p>
        </div>
      </div>
      <h2 class="font-bold mt-5 text-xl">Caio Marianni</h2>
      <p class="font-light text-base mb-2 text-gray-500">
        Many call me Marianni, but you can call me whatever you like. I am a
        curious 21 year old who always seeks to learn more about the things I
        have contact with, how they work and how to improve them.
      </p>
    </div>
  </div>
</template>
