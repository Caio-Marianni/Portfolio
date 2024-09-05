<script setup>
import { RouterView } from "vue-router";
import Background from "./components/background.vue";
import PersonalCard from "./components/PersonalCard.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="h-full">

    <!-- Navbar -->
    <div className="md:w-5/6 lg:w-8/12 m-4 py-4 mt-10 md:m-auto px-5 rounded-[20px] border-black border-2 mb-2">
      <Navbar />
    </div>
    <!-- Content -->
    <div className="relative flex gap-3 md:gap-4 md:w-5/6 lg:w-8/12 mx-4 md:my-4 md:m-auto rounded-[20px]">
      <!-- Personal Card -->
      <div className="w-1/2">
        <PersonalCard />
      </div>
      <!-- Content Place -->
      <div className="h-auto w-full py-4 px-4 rounded-[20px] border-black border-2">
        <h2 class="text-center">proficiency</h2>
        <RouterView />
      </div>
    </div>
  </div>
</template>
