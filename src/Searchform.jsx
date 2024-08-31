import styles from "./Searchform.module.css";
import { useState } from "react";

export default function Searchform({ onSubmit }) {
  const [input, setInput] = useState("nature");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
      }}
      className={styles.form}
    >
      <label htmlFor="search">Search</label>
      <div className={styles.search}>
        <input
          type="search"
          id="search"
          className={styles.searchInput}
          placeholder={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.searchButton}>
          <img src="icons8-search.svg" alt="search icon" />
        </button>
      </div>
    </form>
  );
}
