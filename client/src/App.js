import styles from "../src/styles/main.module.scss"
import Devices from "../src/components/device/Devices"
import Header from "./components/Header";
import Brands from "./components/brand/Brands";
import Types from "./components/type/Types";


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_inner}>
        <div className={styles.topT}>
          <Types />
        </div>
        <div className={styles.botL}>
          <Brands />
        </div>
        <div className={styles.botR}>
          <Devices />
        </div>
      </div>
    </div>
  );
}

export default App;
