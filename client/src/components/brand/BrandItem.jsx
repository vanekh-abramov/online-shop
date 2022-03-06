import React from "react";
import styles from "../../styles/brands.module.scss";

const BrandItem = ({ name }) => {
  return <li className={styles.brand_item}>{name}</li>;
};

export default BrandItem;
