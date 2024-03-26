import { create } from "zustand";
import { getCryptos } from "../services/getCryptos";
import { CryptoCurrency, CryptoPrice } from "../types";
import { Pair } from "../components/CryptoSearchForm/CryptoSearchForm";
import { getPriceCryptos } from "../services/getPriceCryptos";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    result: CryptoPrice
    loading: boolean
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos()
      set(() => ({
        cryptoCurrencies
      }))
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true
       }))
       const result = await getPriceCryptos(pair)
       set(() => ({
        result,
        loading: false
       }))
    }
}))