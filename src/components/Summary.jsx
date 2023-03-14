import data from "../data/data.json";

import styles from "../styles/Summary.module.css";

function getImageURL(name) {
  return new URL("." + name, import.meta.url).href;
}

export default function Summary() {
  return (
    <section className={styles.summary}>
      <header>
        <h1>Summary</h1>
      </header>
      <ul>
        {data.map((d, i) => (
          <li key={i}>
            <div className={styles.category}>
              <img src={getImageURL(d.icon)} alt="" />
              {d.category}
            </div>
            <div className={styles.score_ratio}>
              <span className={styles.score}>{d.score}</span>/ 100
            </div>
          </li>
        ))}
      </ul>
      <button>Continue</button>
    </section>
  );
}
