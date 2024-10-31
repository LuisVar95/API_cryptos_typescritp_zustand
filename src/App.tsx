import { useEffect } from "react"
import CriptoSeacrhForm from "./components/CriptoSeacrhForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, []) 

  return (
    <>
      <div className="container">
          <h1 className="app-title">
              Cotizador de <span>Criptomonedas</span>
          </h1>
          <div className="content">
              <CriptoSeacrhForm/>
              <CryptoPriceDisplay/>
          </div>
      </div>
    </>
  )
}

export default App
