import { z } from "zod";
import { CryptoCurrencyResponseSchema, CurrencySchema, PriceCryptosSchema } from "../schema/crypto-schema";


export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type CryptoPrice = z.infer<typeof PriceCryptosSchema>