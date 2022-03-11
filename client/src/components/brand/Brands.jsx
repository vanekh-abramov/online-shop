import React from "react";
import { LOCAL_HOST, API_URL, BRAND_URL } from "../../constants/internalLinks";
import styles from "../../styles/brands.module.scss";
import useFetch from "../../hooks/useFetch";
import BrandItem from "./BrandItem";

const Brands = () => {
  const limit = 10;
  const page = 1;
  const [brands, loading, error] = useFetch(
    `${LOCAL_HOST}/${API_URL}/${BRAND_URL}`,
    { limit, page }
  );

  return (
    <div className={styles.brands_wrapper}>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      <ul>
        {brands.map(({ name, id, createdAt }) => (
          <BrandItem key={createdAt} name={name} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default Brands;
