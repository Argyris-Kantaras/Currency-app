import DetailInputs from "../Components/Details/DetailsInputs";
import LatestRates from "../Components/Latest Rates/LatestRates";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.main}>
      <div className={styles.decor1}></div>
      <div className={styles.decor2}></div>
      <DetailInputs />
      <div>
        <LatestRates />
      </div>
    </div>
  );
}

export default MainPage;
