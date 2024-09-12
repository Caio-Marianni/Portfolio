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
  <div class="h-auto w-full border-2 mt-16">
    <!-- Cover -->
     <div class="w-full h-2/6">.</div>
     <!-- content container -->
      <div class="h-2/6 w-full">
        <!-- Title -->
         <div class="flex justify-between px-4 py-4 border-b-2">
          {{ title }}
         </div>
        <!-- Info -->
         <div class="flex flex-col md:flex-row-reverse md:text-left gap-4 px-4">
           <div>nao seioque fazer</div>
           <p>{{ description }}</p>
         </div>
      </div>
  </div>
  <div class="h-80 w-20 border-2"></div>
</template>
