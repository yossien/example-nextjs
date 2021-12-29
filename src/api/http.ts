import axios, { AxiosResponse } from 'axios'

export const get = async <T>(url: string): Promise<T | any> => {
  const ENV = process.env.NODE_ENV
  const baseURL =
    ENV === 'development' ? process.env.devApiServer : process.env.apiServer

  return await axios
    .get(url, { baseURL })
    .then((r) => {
      return r.data as T
    })
    .catch((e) => {
      return e
    })
}
