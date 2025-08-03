<template>
  <div
    class="country-details w-full bg-white shadow-lg rounded-[1rem] p-[1rem] sticky top-4"
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
          class="flagImg w-[3rem] h-[2rem] object-cover rounded-sm"
        />
      </div>

      <div class="textInfo w-[80%] flex flex-col items-start">
        <h2 class="countryName text-start font-bold text-[#3cb1f4] text-lg">
          {{ country.name }}
        </h2>
        <p class="countryContinent text-start font-light text-[#888]">
          {{ country.continent.name }}
        </p>
      </div>
    </div>

    <div class="infoCountry flex flex-col items-start p-[0.5rem] space-y-2">
      <div class="info-item">
        <span class="font-bold text-start text-[#3cb1f4]">Capital:</span>
        <span class="font-light text-[#888] ml-1">{{ country.capital }}</span>
      </div>

      <div class="info-item">
        <span class="font-bold text-start text-[#3cb1f4]">Continente:</span>
        <span class="font-light text-[#888] ml-1">{{ country.continent.name }}</span>
      </div>

      <div class="info-item">
        <span class="font-bold text-start text-[#3cb1f4]">Lenguajes:</span>
        <span class="font-light text-[#888] ml-1">{{
          country.languages.map((lang) => lang.name).join(", ")
        }}</span>
      </div>

      <div class="info-item">
        <span class="font-bold text-start text-[#3cb1f4]">Moneda:</span>
        <span class="font-light text-[#888] ml-1">
          {{ country.currency }}
        </span>
      </div>

      <div class="info-item">
        <span class="font-bold text-start text-[#3cb1f4]">Regiones:</span>
        <span class="font-light text-[#888] ml-1">
          {{
            country.states.length > 0
              ? country.states.map((state) => state.name).join(", ")
              : "No disponible"
          }}
        </span>
      </div>
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
  country: Country
}>()
</script>

<style scoped>
.info-item {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .country-details {
    position: static;
    width: 100%;
    margin-top: 1rem;
  }

  .divinfoCard {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .divFlagInfo {
    width: 100%;
    justify-content: center;
  }

  .textInfo {
    width: 100%;
    align-items: center;
  }
}
</style>
