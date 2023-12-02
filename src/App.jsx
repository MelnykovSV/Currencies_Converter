import "./App.css";
import * as S from "./App.styled";
import { useState, useEffect } from "react";
import { axiosInstance } from "./api";
import { API_KEY, BASE_CURRENCY, CURRENCIES } from "./constants";
import { createContext } from "react";
import { Header, CurrenciesConverterTab, ErrorTab } from "./Components";
import { ModernNormalize } from "emotion-modern-normalize";
import { Loader } from "./UI";

export const CurrenciesRatesContext = createContext();

export const App = () => {
  const [currencyRates, setCurrenciesRates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await axiosInstance.get(
          `?apikey=${API_KEY}&base_currency=${BASE_CURRENCY}&currencies=${CURRENCIES.join(
            ","
          )}`
        );

        const extractedCurrenciesData = Object.fromEntries(
          Object.values(result.data.data).map((item) => [
            [item.code],
            item.value,
          ])
        );

        setCurrenciesRates({ [BASE_CURRENCY]: 1, ...extractedCurrenciesData });
        setError(null);
        setIsLoading(false);
      } catch (e) {
        setError({
          status: e.response.status,
          message: e.response.data.message,
        });
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <ModernNormalize />
      <CurrenciesRatesContext.Provider value={currencyRates}>
        <Header />
        <main>
          <div className="container">
            {isLoading && <Loader />}
            {currencyRates && !error ? <CurrenciesConverterTab /> : null}
            {!currencyRates && error ? <ErrorTab /> : null}
          </div>
        </main>
      </CurrenciesRatesContext.Provider>
    </S.Container>
  );
};
