import axios from "axios"

const API_KEY = "44469031-0f110e9345c9f17eea3652ebf"

const pixabayApi = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: API_KEY
  }
})

export const getImage = async (query: string) => {
  try {
    const response = await pixabayApi.get("", {
      params: { q: query, image_type: "photo" }
    })
    return response.data.hits[0]?.webformatURL || null
  } catch (error) {
    console.error("Error fetching image from Pixabay:", error)
    return null
  }
}

export default pixabayApi
