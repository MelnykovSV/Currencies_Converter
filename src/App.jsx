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
  const [currencyRates, setCurrenciesRates] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setCurrenciesRates({ ...currencyRates, isLoading: true });
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
        setCurrenciesRates({
          ...currencyRates,
          isLoading: false,
          data: { [BASE_CURRENCY]: 1, ...extractedCurrenciesData },
        });
      } catch (e) {
        setCurrenciesRates({
          ...currencyRates,
          error: {
            status: e.response.status,
            message: e.response.data.message,
          },
          isLoading: false,
        });
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
            {currencyRates.isLoading && <Loader />}
            {currencyRates.data && !currencyRates.error ? (
              <CurrenciesConverterTab />
            ) : null}
            {!currencyRates.data && currencyRates.error ? <ErrorTab /> : null}
          </div>
        </main>
      </CurrenciesRatesContext.Provider>
    </S.Container>
  );
};
