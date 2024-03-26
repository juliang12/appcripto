import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../../data";
import { useCryptoStore } from "../../store/store";
import s from "./CryptoSearchForm.module.css";

export interface Pair {
  currency: string
  cryptocurrency: string
}

const CryptoSearchForm = () => {
  const crytoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
  const fetchData = useCryptoStore((state) => state.fetchData)
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligarorios')
      return
    }
    setError('')

    fetchData(pair)
  }

  console.log(pair)
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
      <div className={s.field}>
        <label htmlFor="currency">Moneda:</label>
        <select onChange={handleChange} name="currency" id="currency">
          <option value="">--Seleccione</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className={s.field}>
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select onChange={handleChange} name="cryptocurrency" id="cryptocurrency">
          <option value="">--Seleccione</option>
          {crytoCurrencies.map(crypto => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      {error && <span>{error}</span>}
      </div>
      <button className={s.button}>Cotizar</button>
    </form>
  );
};

export default CryptoSearchForm;
