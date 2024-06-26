<template>
  <div class="searchBar p-[1rem]">
    <SearchBar
      v-model:searchTerm="searchTerm"
      @update:selectedContinents="updateSelectedContinents"
    />
  </div>

  <div class="mainDiv flex">
    <div
      class="cardList relative flex flex-wrap gap-[2rem] justify-center cursor-pointer p-[1rem] z-0"
      :class="[selectedCountry ? 'w-[60%]' : 'w-full']"
      style="position: relative"
    >
      <div
        v-for="country in filteredCountries"
        :key="country.code"
        @click="selectCountry(country)"
        class="cardCountries w-[16rem] h-[12rem] rounded-[1.5rem] shadow-lg"
        :class="[
          selectedCountry && selectedCountry.code === country.code
            ? 'bg-[#80cbf9]'
            : 'bg-[#fff]'
        ]"
      >
        <div class="divImgCard h-[7rem]">
          <img
            :src="country.image || imgContinents"
            alt="Country Image"
            class="imgCard w-full h-full rounded-t-[1.5rem]"
          />
        </div>

        <div class="divinfoCard flex flex-row justify-start p-[0.5rem]">
          <div class="divFlagInfo w-[30%] flex p-[0.5rem]">
            <img
              :src="getCountryFlagURL(country.code)"
              alt="Country Flag"
              class="flagImg w-[3rem] h-[2rem]"
            />
          </div>

          <div class="textInfo w-[70%] flex flex-col items-start">
            <p
              class="countryName text-start font-bold"
              :class="[
                '',
                selectedCountry && selectedCountry.code === country.code
                  ? 'text-[#fff]'
                  : 'text-[#3cb1f4]'
              ]"
            >
              {{ country.name }}
            </p>

            <p
              class="countryContinent text-start font-light"
              :class="[
                '',
                selectedCountry && selectedCountry.code === country.code
                  ? 'text-[#fff]'
                  : 'text-[#888]'
              ]"
            >
              {{ country.continent.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedCountry" class="divDetails w-[40%] p-[1rem]">
      <CountryDetails :country="selectedCountry" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue"
import countryApi from "../api/countryApi"
import { GET_COUNTRIES } from "../api/queries"
import SearchBar from "./SearchBar.vue"
import CountryDetails from "./CountryDetails.vue"
import imgContinents from "../assets/continents.png"
import { getImage } from "../api/pixabayApi"
import { getCountryFlagURL } from "../api/flagApi"

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
  flag?: string
}

const responseListCountries = ref<{ countries: Country[] }>({ countries: [] })
const searchTerm = ref<string>("")
const selectedContinents = ref<string[]>([])
const selectedCountry = ref<Country | null>(null)

const filteredCountries = computed(() => {
  let filtered = responseListCountries.value.countries

  const term = searchTerm.value.trim().toLowerCase()
  if (term) {
    filtered = filtered.filter((country) =>
      country.name.toLowerCase().includes(term)
    )
  }

  if (selectedContinents.value.length > 0) {
    filtered = filtered.filter((country) =>
      selectedContinents.value.includes(country.continent.name)
    )
  }

  return filtered
})

const fetchCountries = async () => {
  try {
    const res = await countryApi.post("", { query: GET_COUNTRIES })
    responseListCountries.value = res.data.data

    for (const country of responseListCountries.value.countries) {
      const countryImage = await getImage(country.name)
      country.image = countryImage
    }
  } catch (error) {
    console.error("Error fetching countries:", error)
  }
}

const updateSelectedContinents = (continents: string[]) => {
  selectedContinents.value = continents
}

const selectCountry = (country: Country) => {
  if (selectedCountry.value && selectedCountry.value.code === country.code) {
    selectedCountry.value = null
  } else {
    selectedCountry.value = country
  }
}

onMounted(fetchCountries)
</script>

<style scoped></style>
