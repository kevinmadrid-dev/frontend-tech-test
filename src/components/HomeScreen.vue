<template>
  <div class="containerMain flex w-full min-h-[100vh]">
    <div class="divSidebar w-[20%] bg-[#6d6d6d]">
      <Sidebar />
    </div>

    <div class="containerScreen w-[80%] bg-[#bbe2fc]">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue"
</script>

<style scoped></style>
