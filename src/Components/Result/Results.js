import { useEffect, useState } from "react";
import currencyConverter from "../../Handlers/currencyConverter";
import styles from "./Result.module.css";

function Result(props) {
  const [result, setResult] = useState({});
  useEffect(() => {
    if (props.data.from !== "" && props.data.to !== "" && props.data.amount > 0)
      currencyConverter(
        props.data.from,
        props.data.to,
        props.data.amount,
        setResult
      );
  }, [props]);
  return (
    <div>
      {result !== {} ? (
        <div className={styles.result}>
          <span className={styles.amount}>{result.amount}</span>
          <span className={styles.currency}>{result.newCurrency}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Result;
