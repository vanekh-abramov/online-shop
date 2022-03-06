import React, { useEffect, useState } from "react";
import { LOCAL_HOST, API_URL, BRAND_URL } from "../../constants/internalLinks";
import styles from "../../styles/brands.module.scss";
import axios from "axios";

const Brands = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    axios
      .get(`${LOCAL_HOST}/${API_URL}/${BRAND_URL}`)
      .then((res) => setBrand(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.brands_wrapper}>
      <ul>
        {brand.map(({ name, id, createdAt }) => (
          <li key={createdAt} className={styles.brand_item}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
