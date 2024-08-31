import styles from "./Searchform.module.css";
import { useState } from "react";

export default function Searchform({ onSubmit }) {
  const [input, setInput] = useState("nature");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
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
  );
}
