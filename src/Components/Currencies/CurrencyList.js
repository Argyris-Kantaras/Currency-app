import styles from "./CurrencyList.module.css";
import { useEffect, useRef, useState } from "react";
import getAllCurrencies from "../../Handlers/getAllCurrencies";

function CurrencyList(props) {
  const [currencies, setCurrencies] = useState([]);
  const currencyListRef = useRef();

  useEffect(() => {
    getAllCurrencies(setCurrencies);
  }, []);
  return (
    <div ref={currencyListRef} className={styles.currencyList}>
      <div className={styles.scrollContainer}>
        <ul>
          {currencies.length > 0
            ? currencies.map((currency, i) => {
                return (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      props.setValue(String(currency.id));
                      props.divRef.current.style = "none";
                    }}
                    key={currency.id}
                  >
                    {currency.id}
                    <div className={styles.currencyName}>
                      ({currency.currency_name})
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default CurrencyList;
