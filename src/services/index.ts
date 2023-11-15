import axios from "axios";


const api = axios.create({
  baseURL: 'https://api.adviceslip.com/advice',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

export default api

export interface AdviceResponse {
  slip: {
    id: number,
    advice: string
  }
}

export const fetchAdvice = async (): Promise<AdviceResponse> => {
  const response = (await api.get('')).data

  return response
}
