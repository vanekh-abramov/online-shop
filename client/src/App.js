import styles from "../src/styles/app.module.scss"
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Catalog from "./components/pages/Catalog";
// import Basket from "./components/pages/Basket";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_inner}>
        <AppRouter />
        {/* <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"/basket"} element={<Basket />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
