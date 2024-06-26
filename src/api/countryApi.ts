import axios from "axios"

const countryApi = axios.create({
  baseURL: "https://countries.trevorblades.com",
  headers: {
    "Content-Type": "application/json"
  }
})

export default countryApi
