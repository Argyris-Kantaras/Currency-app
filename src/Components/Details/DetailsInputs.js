import styles from "./DetailInputs.module.css";
import convertImg from "../../icons/convert.png";
import Result from "../Result/Results";
import { useEffect, useRef, useState } from "react";
import CurrencyList from "../Currencies/CurrencyList";

function DetailInputs() {
  const fromRef = useRef();
  const toRef = useRef();
  const amountRef = useRef();
  const fromCurrencyListRef = useRef();
  const toCurrencyListRef = useRef();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [allDetails, setAllDetails] = useState({});

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.parameters}>
          <label>From</label>
          <div
            onMouseOver={() =>
              (fromCurrencyListRef.current.style.display = "flex")
            }
            onMouseLeave={() =>
              (fromCurrencyListRef.current.style.display = "none")
            }
            className={styles.fromToValue}
            ref={fromRef}
            value={fromValue !== "" ? fromValue : "USD"}
          >
            {fromValue !== "" ? fromValue : "USD"}
          </div>
          <div
            onMouseOver={() =>
              (fromCurrencyListRef.current.style.display = "flex")
            }
            onMouseLeave={() =>
              (fromCurrencyListRef.current.style.display = "none")
            }
            ref={fromCurrencyListRef}
            className={styles.fromCurrencyList}
          >
            <CurrencyList
              divRef={fromCurrencyListRef}
              setValue={setFromValue}
            />
          </div>
        </div>
        <img
          onClick={() => {
            setFromValue(toRef.current.innerText);
            setToValue(fromRef.current.innerText);
          }}
          className={styles.icon}
          src={convertImg}
        />
        <div className={styles.parameters}>
          <label>To</label>
          <div
            onMouseOver={() =>
              (toCurrencyListRef.current.style.display = "flex")
            }
            onMouseLeave={() =>
              (toCurrencyListRef.current.style.display = "none")
            }
            className={styles.fromToValue}
            ref={toRef}
            value={toValue !== "" ? toValue : "EUR"}
          >
            {toValue !== "" ? toValue : "EUR"}
          </div>
          <div
            onMouseOver={() =>
              (toCurrencyListRef.current.style.display = "flex")
            }
            onMouseLeave={() =>
              (toCurrencyListRef.current.style.display = "none")
            }
            ref={toCurrencyListRef}
            className={styles.toCurrencyList}
          >
            <CurrencyList divRef={toCurrencyListRef} setValue={setToValue} />
          </div>
        </div>
        <div className={styles.amount}>
          <input ref={amountRef} type="number" />
          <div
            className={styles.changeBtn}
            onClick={(e) => {
              const obj = {
                from: fromRef.current.innerText,
                to: toRef.current.innerText,
                amount: amountRef.current.value,
              };
              setAllDetails(obj);
            }}
          >
            Change
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <Result data={allDetails} />
      </div>
    </div>
  );
}

export default DetailInputs;
