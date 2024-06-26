<template>
  <div
    class="country-details fixed w-[28%] bg-white shadow-lg rounded-[1rem] p-[1rem]"
  >
    <div class="divImgCard h-[12rem]">
      <img
        :src="country.image || imgContinents"
        alt="Country Image"
        class="imgCard w-full h-full rounded-[1rem]"
      />
    </div>

    <div class="divinfoCard flex flex-row justify-start py-[0.5rem]">
      <div class="divFlagInfo w-[20%] flex p-[0.5rem]">
        <img
          :src="getCountryFlagURL(country.code)"
          alt="Country Flag"
          class="flagImg w-[3rem] h-[2rem]"
        />
      </div>

      <div class="textInfo w-[80%] flex flex-col items-start">
        <p class="countryName text-start font-bold text-[#3cb1f4]">
          {{ country.name }}
        </p>
        <p class="countryContinent text-start font-light text-[#888]">
          {{ country.continent.name }}
        </p>
      </div>
    </div>

    <div class="infoCountry flex flex-col items-start p-[0.5rem]">
      <p class="font-bold text-start text-[#3cb1f4]">
        Capital:
        <span class="font-light text-[#888]">{{ country.capital }}</span>
      </p>

      <p class="font-bold text-start text-[#3cb1f4]">
        Continente:
        <span class="font-light text-[#888]">{{ country.continent.name }}</span>
      </p>

      <p class="font-bold text-start text-[#3cb1f4]">
        Lenguajes:
        <span class="font-light text-[#888]">{{
          country.languages.map((lang) => lang.name).join(", ")
        }}</span>
      </p>

      <p class="font-bold text-start text-[#3cb1f4]">
        Moneda:
        <span class="font-light text-[#888]">
          {{ country.currency }}
        </span>
      </p>

      <p class="font-bold text-start text-[#3cb1f4]">
        Regiones:
        <span class="font-light text-[#888]">
          {{ country.states.map((state) => state.name).join(", ") }}
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { getCountryFlagURL } from "../api/flagApi"
import imgContinents from "../assets/continents.png"

interface Language {
  code: string
  name: string
}

interface State {
  code: string
  name: string
}

interface Country {
  code: string
  name: string
  continent: {
    name: string
  }
  capital: string
  languages: Language[]
  currency: string
  states: State[]
  image?: string
}

defineProps<{
  country: Country;
}>();
</script>

<style scoped></style>
