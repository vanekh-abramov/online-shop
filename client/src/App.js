import { useState } from "react";
import styles from "../src/styles/app.module.scss"
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { Context } from './context'

function App() {
  const [typeID, setTypeID] = useState(null)
  const [brandID, setBrandID] = useState([])
  const [basketDevice, setBasketDevice] = useState([])

  return (
    <Context.Provider value={{ typeID, setTypeID, brandID, setBrandID, basketDevice, setBasketDevice }}>
      <div className={styles.container}>
        <Header />
        <div className={styles.container_inner}>
          <AppRouter />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
