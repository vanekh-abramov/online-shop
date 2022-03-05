import styles from "../src/styles/main.module.scss"
import Devices from "../src/components/device/Devices"
import Header from "./components/Header";


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_inner}>
        <Devices />
      </div>
    </div>
  );
}

export default App;
