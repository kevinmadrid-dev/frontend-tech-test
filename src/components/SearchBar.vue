<template>
  <div class="searchBar relative flex justify-center items-center p-[1rem]">
    <div class="relative w-[80%]">
      <input
        type="text"
        placeholder="Escribe el país que deseas ver"
        v-model="searchTerm"
        @input="handleInput"
        @focus="showDropdown = true"
        class="searchInput w-full h-[3.5rem] pl-[1.5rem] pr-[4rem] bg-[#ffffff] text-black rounded-[5rem] shadow-lg focus:outline-none focus:border-none"
      />

      <div
        class="divSearch absolute w-[8rem] h-[2.3rem] right-[1rem] top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-[#3cb1f4] text-white rounded-[5rem] cursor-pointer"
      >
        <img
          :src="imgSearch"
          alt="SearchIcon"
          class="searchIcon w-[2rem] h-[2rem] m-[0.5rem]"
        />

        <h3 class="textSearch m-[0.5rem]">Buscar</h3>
      </div>
    </div>
    <div
      v-if="showDropdown"
      class="filtersContainer absolute w-full top-[5rem] left-0 right-0 flex justify-center z-10"
    >
      <div
        class="divFilters w-[80%] flex flex-col bg-[#fff] p-[1rem] rounded-[1rem]"
        style="position: relative; z-index: 10"
      >
        <div class="flex row justify-between p-[0.3rem]">
          <label class="titleFilter font-semibold text-[#262626]">
            Filtrar por continentes
          </label>

          <div class="divBtn pb-[1rem]">
            <div
              class="close-btn flex flex-end cursor-pointer bg-none border-none font-semibold text-[#3cb1f4]"
              @click="showDropdown = false"
            >
              Cerrar menú
            </div>

            <div
              class="clear-btn cursor-pointer bg-none border-none font-semibold text-[#3cb1f4]"
              @click="clearFilter"
            >
              Limpiar filtro
            </div>
          </div>
        </div>

        <div class="continent-cards flex flex-wrap gap-[1rem] justify-center">
          <div
            v-for="continent in continents"
            :key="continent"
            class="continentCard flex flex-col items-start cursor-pointer p-2 font-semibold text-[#262626] hover:bg-[#3cb1f4] rounded-lg"
            @click="toggleContinent(continent)"
            :class="[
              selectedContinents.includes(continent) ? 'bg-[#3cb1f4]' : 'bg-[#fff]'
            ]"
          >
            <img
              :src="getContinentImage(continent)"
              alt="Icono de continente"
              class="continent-img w-[10rem] h-[7rem] object-cover rounded-[0.5rem]"
            />

            <p
              class="continent-name text-center mt-2"
              :class="[
                selectedContinents.includes(continent)
                  ? 'text-[#fff]'
                  : 'text-[#000]'
              ]"
            >
              {{ continent }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"

import imgSearch from "../assets/searchIcon.png"
import africaImg from "../assets/africaImg.png"
import asiaImg from "../assets/asiaImg.png"
import europaImg from "../assets/europaImg.png"
import norteAmericaImg from "../assets/norteAmericaImg.png"
import surAmericaImg from "../assets/surAmericaImg.png"
import oceaniaImg from "../assets/oceaniaImg.png"

const emits = defineEmits(["update:selectedContinents", "update:searchTerm"])
const searchTerm = ref<string>("")
const selectedContinents = ref<string[]>([])
const continents = ref<string[]>([
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania"
])
const showDropdown = ref<boolean>(false)

const handleInput = () => {
  emits("update:searchTerm", searchTerm.value)
}

const toggleContinent = (continent: string) => {
  const index = selectedContinents.value.indexOf(continent)
  if (index === -1) {
    selectedContinents.value.push(continent)
  } else {
    selectedContinents.value.splice(index, 1)
  }
  emits("update:selectedContinents", selectedContinents.value)
}

const clearFilter = () => {
  selectedContinents.value = []
  emits("update:selectedContinents", selectedContinents.value)
}

const getContinentImage = (continent: string) => {
  switch (continent) {
    case "Africa":
      return africaImg
    case "Asia":
      return asiaImg
    case "Europe":
      return europaImg
    case "North America":
      return norteAmericaImg
    case "South America":
      return surAmericaImg
    case "Oceania":
      return oceaniaImg
    default:
      return ""
  }
}
</script>

<style scoped></style>
