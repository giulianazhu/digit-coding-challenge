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
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Searchform onSubmit={handleSearch} />
      </nav>
      <main className={styles.main}>
        <Sidebar currImg={currImg} setCurrImg={setCurrImg} images={images} />
        <section className={styles.displayer}>
          <Display currImg={currImg} />
          <Thumbnails
            images={images}
            setCurrImg={setCurrImg}
            currImg={currImg}
          />
        </section>
      </main>
    </div>
  );
}
