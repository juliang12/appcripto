import axios from "axios"
import { Pair } from "../components/CryptoSearchForm/CryptoSearchForm"
import { PriceCryptosSchema } from "../schema/crypto-schema"

export async function getPriceCryptos(pair: Pair) {
    const {cryptocurrency, currency} = pair
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
    const {data: { DISPLAY} } = await axios(url)
    const result = PriceCryptosSchema.safeParse(DISPLAY[cryptocurrency][currency])
    
    if(result.success) {
        return result.data
    }
}