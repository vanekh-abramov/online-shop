import styles from "../src/styles/app.module.scss"
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_inner}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
