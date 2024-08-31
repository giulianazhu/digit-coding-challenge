import styles from "./Display.module.css";

export default function Display({ currImg }) {
  return (
    <div className={styles.display}>
      <div className={styles.title}>
        {currImg?.photographer}
        <a href={currImg?.photographer_url}> details</a>
      </div>
      <img
        src={currImg?.src?.original}
        alt={currImg?.alt}
        className={styles.mainImg}
      />
    </div>
  );
}
