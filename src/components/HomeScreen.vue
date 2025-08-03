<template>
  <div class="containerMain min-h-screen bg-[#bbe2fc]">
    <!-- Sidebar component -->
    <Sidebar />

    <!-- Main content with proper spacing for sidebar -->
    <div
      class="containerScreen lg:ml-[20%] md:ml-[25%] ml-0 lg:mb-0 md:mb-0 mb-16 min-h-screen overflow-y-auto"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue"
</script>

<style scoped>
/* Layout principal responsivo */

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .containerScreen {
    margin-left: 20%; /* Espacio para sidebar fija */
    margin-bottom: 0;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .containerScreen {
    margin-left: 25%; /* Espacio para sidebar más ancha en tablet */
    margin-bottom: 0;
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .containerScreen {
    margin-left: 0;
    margin-bottom: 4rem; /* Espacio para bottom navigation */
    padding-bottom: 1rem; /* Padding adicional para evitar que el contenido se oculte */
  }
}

/* Transiciones suaves */
.containerScreen {
  transition: margin-left 0.3s ease, margin-bottom 0.3s ease;
}
</style>
