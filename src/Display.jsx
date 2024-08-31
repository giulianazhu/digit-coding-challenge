import styles from "./Display.module.css";

export default function Display({ currImg }) {
  return (
    <div className={styles.display}>
      <div className={styles.title}>
        <span>Photographer: </span>
        <span>
          <a href={currImg?.photographer_url}>{currImg?.photographer}</a>
        </span>
      </div>
      <img
        src={currImg?.src?.original}
        alt={currImg?.alt}
        className={styles.mainImg}
      />
    </div>
  );
}
