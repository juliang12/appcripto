import { useEffect } from 'react'
import CryptoSearchForm from './components/CryptoSearchForm/CryptoSearchForm'
import { useCryptoStore } from './store/store'
import CryptoPriceDisplay from './components/CryptoPriceDisplay/CryptoPriceDisplay'

function App() {
const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  useEffect(() => {
    fetchCryptos()
  }, [])
  
  return (
    <div className='container'>
      <h1 className='app-title'>
        Cotizador de <span>Criptomonedas </span>
      </h1>

      <div className='content'>
        <CryptoSearchForm/>
        <CryptoPriceDisplay/>
      </div>
    </div>
  )
}

export default App
