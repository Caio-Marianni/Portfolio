<script>
export default {
  props: ["cover", "title", "link", "description", "technologies"],
  data() {
    return {
      // technologies ?
    };
  },
};
</script>

<template>
  <div class="h-auto w-full shadow-2xl rounded-lg overflow-hidden bg-white">
    <!-- Cover -->
    <div class="w-full h-40 overflow-hidden">
      <img src="../assets/project1.png" alt="" />
    </div>
    <!-- content container -->
    <div class="h-auto">
      <!-- Title -->
      <div class="flex justify-between items-center px-4 py-4 border-b-2">
        <h1 class="font-terFont">
          {{ title }}
        </h1>
        <a href="https://victorlou-landing-page.vercel.app" target="_blank" class="rounded-full px-4 py-1 border-2 border-orange-600">access project</a>
      </div>
      <!-- Info -->
      <div class="flex flex-row-reverse md:text-left gap-4 px-4 py-8 text-base">
        <div class="flex flex-row flex-wrap gap-2">
          <div class="h-8 w-8 flex justify-center items-center">
            <img src="../assets/iconJs.webp" alt="" />
          </div>
          <div class="h-8 w-8 flex justify-center items-center">
            <img src="../assets/iconVitejs.webp" alt="" />
          </div>
          <div class="h-8 w-8 flex justify-center items-center">
            <img src="../assets/iconVue.webp" alt="" />
          </div>
          <div class="h-8 w-8 flex justify-center items-center">
            <img src="../assets/iconTailwind.webp" alt="" />
          </div>
        </div>
        <p class="opacity-70">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
