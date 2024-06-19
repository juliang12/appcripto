import s from "./CyptoPriceDisplay.module.css";
import { useCryptoStore } from "../../store/store";
import { useMemo } from "react";
import { Loader } from "../Loader/Loader";

const CryptoPriceDisplay = () => {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = useMemo(
    () => Object.values(result).length > 0,
    [result]
  );
  console.log('hgolaa')
  return (
    <div className={s.resultWrapper}>
      {loading ? <Loader/> : hasResult && (
        <>
          <h2>Cotizacion</h2>
          <div className={s.result}>
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Imagen criptomoneda"
            />
            <div>
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
              <p>
                El precio mas alto del dia: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                El precio mas bajo del dia: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Variación ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
                <p>
                  Ultima actualizacion: <span>{result.LASTUPDATE}</span>
                </p>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
