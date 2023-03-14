import Result from "./components/Result";
import Summary from "./components/Summary";
// import Attribution from "./components/Attribution";

import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <main className={styles.main}>
        <Result />
        <Summary />
      </main>
      <footer>{/* <Attribution /> */}</footer>
    </>
  );
}

export default App;