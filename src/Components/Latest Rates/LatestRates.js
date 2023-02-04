import { useEffect, useState } from "react";
import styles from "./LatestRates.module.css";
import latestRates from "../../Handlers/latestRates";

function LatestRates() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState({});
  useEffect(() => {
    latestRates(setList, setLoading);
  }, [loading]);
  return (
    <div className={styles.ratesList}>
      <h3>All currency rates are compared to USD!</h3>
      {list.length > 0
        ? list.map((rate) => {
            return (
              <div key={rate[0]}>
                <span className={styles.currency}>{rate[0]}</span>
                <span>{rate[1]}</span>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default LatestRates;
