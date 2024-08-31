import styles from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getImagesByTopic } from "./apiServices";
import Sidebar from "./Sidebar";
import Searchform from "./Searchform";
import Thumbnails from "./Thumbnails";
import Display from "./Display";

export default function App() {
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

  return (
    <main className={styles.page}>
      <section className={styles.nav}>
        <Searchform onSubmit={handleSearch} />
      </section>
      <section className={styles.content}>
        <Sidebar currImg={currImg} setCurrImg={setCurrImg} images={images} />
        <div className={styles.displayer}>
          <Display currImg={currImg} />
          <div className={styles.listWrap}>
            <Thumbnails
              images={images}
              setCurrImg={setCurrImg}
              currImg={currImg}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
