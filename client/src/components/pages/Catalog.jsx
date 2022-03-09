import React from "react";
import Brands from "../brand/Brands";
import Devices from "../device/Devices";
import Types from "../type/Types";
import styles from "../../styles/catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.container_inner}>
      <div className={styles.topT}>
        <Types />
      </div>
      <div className={styles.botL}>
        <Brands />
      </div>
      <div className={styles.botR}>
        <Devices />
      </div>
    </div>
  );
};

export default Catalog;
