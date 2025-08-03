<template>
  <nav
    class="sidebar lg:fixed lg:w-[20%] lg:h-full lg:top-0 lg:left-0 lg:p-4 lg:bg-[#6d6d6d] lg:z-50 md:fixed md:w-[25%] md:h-full md:top-0 md:left-0 md:p-3 md:bg-[#6d6d6d] md:z-50 fixed w-full h-auto bottom-0 left-0 p-2 bg-[#6d6d6d] z-50 shadow-lg"
    role="navigation"
    aria-label="Navegación principal"
  >
    <div
      class="containerSidebar w-full h-full lg:flex lg:flex-col lg:justify-start lg:items-center lg:space-y-2 md:flex md:flex-col md:justify-start md:items-center md:space-y-1 flex flex-row justify-around items-center space-y-0"
    >
      <router-link
        to="/home"
        class="divRouteLogo lg:flex md:flex hidden justify-center w-full lg:py-2 md:py-1"
        aria-label="Ir al inicio"
      >
        <div
          class="divLogo flex justify-center items-center w-[90%] lg:h-16 md:h-12 bg-[#F0F8FF] text-[#262626] rounded-lg font-bold lg:text-lg md:text-base transition-all duration-200 hover:bg-white hover:scale-105"
        >
          <h1 class="lg:text-lg md:text-base">Logo</h1>
        </div>
      </router-link>

      <router-link
        to="/home"
        class="divRouteHome flex justify-center lg:w-full md:w-full w-auto lg:py-2 md:py-1 py-1 px-2"
      >
        <div
          class="divHome flex lg:justify-start md:justify-start justify-center items-center lg:w-[90%] md:w-[90%] w-auto lg:h-8 md:h-7 h-10 lg:px-4 md:px-3 px-3 rounded-lg transition-all duration-200"
          :class="[
            isActive('/home')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold shadow-md'
              : 'bg-transparent text-white hover:bg-[#5a5a5a] hover:scale-105'
          ]"
        >
          <h3 class="lg:ml-2 md:ml-2 ml-0 lg:text-sm md:text-xs text-xs font-medium">
            Home
          </h3>
        </div>
      </router-link>

      <router-link
        to="/vista01"
        class="divRouteView1 flex justify-center lg:w-full md:w-full w-auto lg:py-2 md:py-1 py-1 px-2"
      >
        <div
          class="divView1 flex lg:justify-start md:justify-start justify-center items-center lg:w-[90%] md:w-[90%] w-auto lg:h-8 md:h-7 h-10 lg:px-4 md:px-3 px-3 rounded-lg transition-all duration-200"
          :class="[
            isActive('/vista01')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold shadow-md'
              : 'bg-transparent text-white hover:bg-[#5a5a5a] hover:scale-105'
          ]"
        >
          <h3 class="lg:ml-2 md:ml-2 ml-0 lg:text-sm md:text-xs text-xs font-medium">
            Vista 01
          </h3>
        </div>
      </router-link>

      <router-link
        to="/vista02"
        class="divRouteView2 flex justify-center lg:w-full md:w-full w-auto lg:py-2 md:py-1 py-1 px-2"
      >
        <div
          class="divView2 flex lg:justify-start md:justify-start justify-center items-center lg:w-[90%] md:w-[90%] w-auto lg:h-8 md:h-7 h-10 lg:px-4 md:px-3 px-3 rounded-lg transition-all duration-200"
          :class="[
            isActive('/vista02')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold shadow-md'
              : 'bg-transparent text-white hover:bg-[#5a5a5a] hover:scale-105'
          ]"
        >
          <h3 class="lg:ml-2 md:ml-2 ml-0 lg:text-sm md:text-xs text-xs font-medium">
            Vista 02
          </h3>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
/* Sidebar base styles */
.sidebar {
  transition: all 0.3s ease;
}

/* Desktop (≥ 1024px) - Sidebar vertical izquierda */
@media (min-width: 1024px) {
  .sidebar {
    position: fixed;
    width: 20%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 1rem;
    background-color: #6d6d6d;
    z-index: 50;
  }
}

/* Tablet (768px - 1023px) - Sidebar vertical más estrecha */
@media (min-width: 768px) and (max-width: 1023px) {
  .sidebar {
    position: fixed;
    width: 25%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0.75rem;
    background-color: #6d6d6d;
    z-index: 50;
  }
}

/* Mobile (< 768px) - Bottom navigation bar */
@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    width: 100%;
    height: auto;
    bottom: 0;
    left: 0;
    top: auto;
    padding: 0.5rem;
    background-color: #6d6d6d;
    z-index: 50;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }

  .containerSidebar {
    flex-direction: row !important;
    justify-content: space-around !important;
    align-items: center !important;
    gap: 0.25rem;
    padding: 0;
  }

  .divRouteLogo {
    display: none !important;
  }

  .divRouteHome,
  .divRouteView1,
  .divRouteView2 {
    flex: 1;
    padding: 0.25rem;
  }

  .divHome,
  .divView1,
  .divView2 {
    width: 100% !important;
    height: 2.5rem !important;
    justify-content: center !important;
    padding: 0.5rem !important;
    margin: 0 !important;
  }

  .divHome h3,
  .divView1 h3,
  .divView2 h3 {
    font-size: 0.75rem !important;
    font-weight: 500;
    margin: 0;
    margin-left: 0 !important;
  }

  .divHome span,
  .divView1 span,
  .divView2 span {
    display: none !important;
  }
}

/* Muy pequeño (< 480px) */
@media (max-width: 479px) {
  .sidebar {
    padding: 0.25rem;
  }

  .divHome h3,
  .divView1 h3,
  .divView2 h3 {
    font-size: 0.625rem !important;
  }

  .divHome,
  .divView1,
  .divView2 {
    height: 2rem !important;
    padding: 0.25rem !important;
  }
}

/* Estados hover mejorados */
.divHome:hover,
.divView1:hover,
.divView2:hover {
  transform: translateY(-1px);
}

/* Focus para accesibilidad */
.divRouteHome:focus-visible,
.divRouteView1:focus-visible,
.divRouteView2:focus-visible,
.divRouteLogo:focus-visible {
  outline: 2px solid #3cb1f4;
  outline-offset: 2px;
}
</style>
