<script>
export default {
  components: { Navigation },
  methods: {
    rotateMenu() {
      const bar1 = this.$refs.bar1;
      const bar2 = this.$refs.bar2;
      const bar3 = this.$refs.bar3;
      const menu = this.$refs.menu;
      const card = this.$refs.card;
      bar1.classList.toggle("-rotate-45");
      bar1.classList.toggle("translate-y-4");
      bar2.classList.toggle("opacity-0");
      bar3.classList.toggle("rotate-45");
      bar3.classList.toggle("-translate-y-4");
      menu.classList.toggle("bg-[#090909]");
      menu.classList.toggle("bg-opacity-50");
      card.classList.toggle("left-4");
    },
  },
};
</script>
<template>
  <div class="relative md:static w-full h-full md:w-auto md:h-auto overflow-hidden md:overflow-visible">
    <!-- Burguer Menu -->
    <div class="absolute top-[60px] right-2 md:invisible h-20 pr-5 z-10">
      <div
        @click="rotateMenu"
        class="absolute right-7 cursor-pointer flex flex-col gap-2 justify-center items-center"
      >
        <div
          ref="bar1"
          class="h-2 w-10 bg-white rounded-full transition duration-300 ease-in-out transform"
        ></div>
        <div
          ref="bar2"
          class="h-2 w-10 bg-white rounded-full transition duration-200 ease-in-out transform rotate-0"
        ></div>
        <div
          ref="bar3"
          class="h-2 w-10 bg-white rounded-full transition duration-300 ease-in-out transform"
        ></div>
      </div>
    </div>
    <!-- menu personal card -->
    <div ref="menu" class="h-full transition-all duration-300"></div>
    <!-- Personal Card -->
    <div
      ref="card"
      class="absolute md:sticky font-terFont text-white top-40 -left-full md:top-4 pb-4 rounded-[20px] max-w-96 shadow-2xl overflow-hidden bg-[#141414] transition-all duration-300"
    >
      <!-- top banner part -->
      <div>
        <!-- background banner -->
        <img
          class="h-20 object-cover w-full"
          src="../assets/background.webp"
          alt="background"
        />
        <!-- profile and logo -->
        <div
          class="flex flex-col justify-center items-center -mt-[50px] lg:-mt-[65px]"
        >
          <img
            class="w-28 lg:w-32 rounded-full"
            src="../assets/profile.webp"
            alt="personal-pic"
          />
            <img class="w-16 h-16 -mt-8 mb-2" src="../assets/logo2.webp" alt="logo" />
        </div>
        <!-- Dowload Cv -->
        <div class="text-center py-4 mb-20">
          <a
            class="py-2 px-4 border-2 border-orange-700 rounded-full hover:text-orange-400 hover:border-orange-800 hover:bg-[#5a5a5a] transition-all duration-500"
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
        <div class="flex flex-col gap-2 mt-24 text-sm font-secFont">
          <div class="flex items-center">
            <img
              class="w-8 h-8 md:w-9 md:h-9"
              src="../assets/flag.webp"
              alt="flag"
            />
            <p class="opacity-70 pl-2">Brazil</p>
          </div>
          <div class="flex items-center">
            <img
              class="w-8 h-8 md:w-9 md:h-9"
              src="../assets/tranlate.webp"
              alt="flag"
            />
            <p class="opacity-70 pl-2">English / Portugues</p>
          </div>
        </div>
        <h2 class="font-normal mt-5 mb-2 mr-2 text-xl border-b-2  border-orange-300">Caio Marianni</h2>
        <p class="font-secFont font-extralight mb-2 opacity-60">
          Many call me Marianni, but you can call me whatever you like. I am a
          curious 21 year old who always seeks to learn more about the things I
          have contact with, how they work and how to improve them.
        </p>
      </div>
    </div>
  </div>
</template>
