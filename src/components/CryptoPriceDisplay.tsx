import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  return (
    <div className="result-wrapper">
        {hasResult && (
            <>
                <h2>Cotización</h2>
                <div className="result">
                    <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda"/>
                    <div>
                        <p>El precio es de: <span>{result.PRICE}</span></p>
                        <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
                        <p>El precio más bajo del día: <span>{result.LOWDAY}</span></p>
                        <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>última actualización: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}
