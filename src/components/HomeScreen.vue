<template>
  <div class="containerMain flex flex-col lg:flex-row w-full min-h-[100vh]">
    <div class="divSidebar w-full lg:w-[20%] bg-[#6d6d6d]">
      <Sidebar />
    </div>

    <div class="containerScreen w-full lg:w-[80%] bg-[#bbe2fc] overflow-y-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue"
</script>

<style scoped>
@media (max-width: 768px) {
  .containerMain {
    flex-direction: column;
  }

  .divSidebar {
    width: 100%;
    order: 2;
  }

  .containerScreen {
    width: 100%;
    order: 1;
  }
}

@media (max-width: 1024px) {
  .containerScreen {
    margin-left: 0;
  }
}
</style>
