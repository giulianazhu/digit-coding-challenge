import styles from "./Sidebar.module.css";

export default function Sidebar({ images, currImg, setCurrImg }) {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sideList}>
        {images?.map((img, i) => (
          <li
            className={`${styles.sideButtons} ${
              currImg.id === img?.id && styles.activeSideButton
            }`}
            key={img?.id}
            onClick={() => setCurrImg(img)}
          >
            Image {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
