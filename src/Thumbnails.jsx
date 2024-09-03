import styles from "./Thumbnails.module.css";

export default function Thumbnails({ images, currImg, setCurrImg }) {
  return (
    <ul className={styles.thumbnailList}>
      {images.map((img) => (
        <li key={img.id} onClick={() => setCurrImg(img)}>
          <img
            src={img.src.small}
            alt={img.alt}
            className={`${styles.thumbnail} ${
              currImg?.id === img.id && styles.activeThumbnail
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
