<script setup>
import { RouterView } from "vue-router";
import Background from "./components/background.vue";
import PersonalCard from "./components/PersonalCard.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- Navbar -->
  <div className=" md:w-2/6 m-4 py-4 md:m-auto mt-10 px-5 rounded-[20px] border-black border-2 mb-2">
    <Navbar />
  </div>
  <!-- Content -->
  <div className="flex gap-3 md:w-2/6 mx-4 md:m-auto rounded-[20px]">
    <!-- Personal Card -->
    <div className="w-1/2 pb-4 rounded-[20px] border-black border-2 overflow-hidden">
      <PersonalCard />
    </div>
    <!-- Content Place -->
    <div className="h-32 w-full rounded-[20px] border-black border-2">
      <RouterView />
    </div>
  </div>
</template>
