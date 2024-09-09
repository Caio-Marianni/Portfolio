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
  <div class="border-2 border-black">
    <!-- cover -->
    <div class="w-full h-36 bg-green-300">{{ cover }}</div>
    <!-- Title / Link -->
    <div class=""></div>
    <!-- Descr. / tech. -->
    <div class=""></div>
  </div>
</template>
