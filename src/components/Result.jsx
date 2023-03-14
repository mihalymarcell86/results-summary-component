import styles from "../styles/Result.module.css";

export default function Result() {
  return (
    <section className={styles.result}>
      <header>
        <h1>Your Result</h1>
      </header>
      <div className={styles.circle}>
        <div className={styles.score}>76</div>
        <div className={styles.outof}>of 100</div>
      </div>
      <h2>Great</h2>
      <p>
        You scored higher than 65% of <br className={styles.linebreak} />
        the people conducting the tests here!
      </p>
    </section>
  );
}
