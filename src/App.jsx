import styles from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getImagesByTopic } from "./apiServices";

export default function App() {
  const [input, setInput] = useState("nature");
  const [currImg, setCurrImg] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(function () {
    async function fetchImages(input) {
      const data = await getImagesByTopic(input);

      if (data.length) {
        setImages(data);
        setCurrImg(data[0]);
      }
    }
    fetchImages("nature");
  }, []);

  async function handleSearch(input) {
    const data = await getImagesByTopic(input);

    if (data.length) {
      setImages(data);
      setCurrImg(data[0]);
    }
  }
  console.log(currImg);

  return (
    <main className={styles.page}>
      <section className={styles.nav}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(input);
            console.log("submit");
          }}
          className={styles.form}
        >
          <label htmlFor="search">Search</label>
          <input
            type="search"
            id="search"
            className={styles.search}
            placeholder={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.searchButton}>
            <img src="icons8-search.svg" alt="" />
          </button>
        </form>
      </section>
      <section className={styles.content}>
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
        <div className={styles.displayer}>
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
          <div className={styles.listWrap}>
            <ul className={styles.thumbnailList}>
              {images?.map((img) => (
                <li key={img?.id} onClick={() => setCurrImg(img)}>
                  <img
                    src={img?.src?.small}
                    alt={img?.alt}
                    className={`${styles.thumbnail} ${
                      currImg.id === img?.id && styles.activeThumbnail
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
