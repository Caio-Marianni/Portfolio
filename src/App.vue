<script setup>
import { RouterView } from "vue-router";
import Background from "./components/background.vue";
import PersonalCard from "./components/PersonalCard.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- background -->
  <div class="fixed h-full w-full bg-[#0D0A2C] overflow-hidden">
    <Background />
  </div>
  <!-- Main Content -->
  <div class="absolute h-full w-full z-10">
    <!-- Navbar -->
    <div className="relative md:w-11/12 lg:w-8/12 m-auto mx-4 md:m-auto z-10">
      <Navbar />
    </div>
    <!-- Page -->
    <div className="relative flex gap-4 md:w-11/12 lg:w-8/12 mx-4 my-4 md:my-4 md:m-auto rounded-[20px]">
      <!-- Personal Card -->
      <div className="absolute w-full md:relative md:w-1/3 md:max-w-96">
        <PersonalCard />
      </div>
      <!-- Content Place -->
      <div className="h-auto w-full rounded-[20px] overflow-hidden">
        <RouterView />
      </div>
    </div>
    <!-- Mobile navigation -->
    <div class="absolute top-0 h-screen w-screen md:hidden">
      <PersonalCard/>
    </div>
  </div>
</template>
