import React from "react";
import { ScaleLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ScaleLoader />
    </div>
  );
}

export default Loader;
