<template>
  <div class="sidebar fixed w-[20%] h-full p-[1rem]">
    <div class="containerSidebar w-full h-full">
      <router-link
        to="/home"
        class="divRouteLogo flex justify-center w-full py-[0.5rem]"
      >
        <div
          class="divLogo flex justify-center items-center w-[90%] h-[4rem] bg-[#F0F8FF] text-[#262626] rounded-[0.5rem]"
        >
          <h3>Logo</h3>
        </div>
      </router-link>

      <router-link
        to="/home"
        class="divRouteHome flex justify-center w-full py-[0.5rem]"
      >
        <div
          class="divHome flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem]"
          :class="[
            isActive('/home')
              ? 'bg-[#F0F8FF]'
              : 'bg-transparent' && isActive('/home')
              ? 'text-[#262626]'
              : 'text-[#fff]'
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
          class="divView1 flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem]"
          :class="[
            isActive('/vista01')
              ? 'bg-[#F0F8FF]'
              : 'bg-transparent' && isActive('/vista01')
              ? 'text-[#262626]'
              : 'text-[#fff]'
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
          class="divView2 flex justify-start items-center w-[90%] h-[2rem] text-[#262626] rounded-[0.5rem] p-[1rem]"
          :class="[
            isActive('/vista02')
              ? 'bg-[#F0F8FF]'
              : 'bg-transparent' && isActive('/vista02')
              ? 'text-[#262626]'
              : 'text-[#fff]'
          ]"
        >
          <h3>Vista 02</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped></style>
