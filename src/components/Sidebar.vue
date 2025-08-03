<template>
  <nav
    class="sidebar fixed w-[20%] h-full p-[1rem]"
    role="navigation"
    aria-label="Navegación principal"
  >
    <div class="containerSidebar w-full h-full">
      <router-link
        to="/home"
        class="divRouteLogo flex justify-center w-full py-[0.5rem]"
        aria-label="Ir al inicio"
      >
        <div
          class="divLogo flex justify-center items-center w-[90%] h-[4rem] bg-[#F0F8FF] text-[#262626] rounded-[0.5rem] font-bold text-lg transition-colors duration-200 hover:bg-white"
        >
          <h3>Logo</h3>
        </div>
      </router-link>

      <router-link
        to="/home"
        class="divRouteHome flex justify-center w-full py-[0.5rem]"
      >
        <div
          class="divHome flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem] transition-all duration-200"
          :class="[
            isActive('/home')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold'
              : 'bg-transparent text-[#fff] hover:bg-[#5a5a5a]'
          ]"
        >
          <h3>Home</h3>
        </div>
      </router-link>

      <router-link
        to="/vista01"
        class="divRouteView1 flex justify-center w-full py-[0.5rem]"
      >
        <div
          class="divView1 flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem] transition-all duration-200"
          :class="[
            isActive('/vista01')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold'
              : 'bg-transparent text-[#fff] hover:bg-[#5a5a5a]'
          ]"
        >
          <h3>Vista 01</h3>
        </div>
      </router-link>

      <router-link
        to="/vista02"
        class="divRouteView2 flex justify-center w-full py-[0.5rem]"
      >
        <div
          class="divView2 flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem] transition-all duration-200"
          :class="[
            isActive('/vista02')
              ? 'bg-[#F0F8FF] text-[#262626] font-semibold'
              : 'bg-transparent text-[#fff] hover:bg-[#5a5a5a]'
          ]"
        >
          <h3>Vista 02</h3>
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
@media (max-width: 1024px) {
  .sidebar {
    width: 25%;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
  }

  .containerSidebar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .divRouteLogo,
  .divRouteHome,
  .divRouteView1,
  .divRouteView2 {
    width: auto;
    flex: 1;
  }

  .divLogo,
  .divHome,
  .divView1,
  .divView2 {
    width: 100%;
    justify-content: center;
    font-size: 0.875rem;
  }
}
</style>
