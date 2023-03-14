import scss from "../styles/Attribution.module.css";

export default function Attribution() {
  return (
    <div className={scss.attribution}>
      Challenge&nbsp;by&nbsp;
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend&nbsp;Mentor
      </a>
      . Coded&nbsp;by&nbsp;
      <a
        href="https://www.github.com/mihalymarcell86"
        target="_blank"
        rel="noreferrer"
      >
        Marcell&nbsp;Mihály
      </a>
      .
    </div>
  );
}
