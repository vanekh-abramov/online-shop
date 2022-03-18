import React, { useContext } from "react";
import { LOCAL_HOST, API_URL, BRAND_URL } from "../../constants/internalLinks";
import styles from "../../styles/brands.module.scss";
import useFetch from "../../hooks/useFetch";
import BrandItem from "./BrandItem";
import { Context } from "../../context";

const Brands = () => {
  const { brandID, setBrandID } = useContext(Context);

  const [brands, loading, error] = useFetch(
    `${LOCAL_HOST}/${API_URL}/${BRAND_URL}`
  );

  function brandsHandler(id) {
    return () => {
      const array = [...brandID, id];
      const result = [];

      array.sort((a, b) => {
        return a - b;
      });

      for (let i = 0; i < array.length; i++) {
        array[i] !== array[i - 1] &&
          array[i + 1] !== array[i] &&
          result.push(array[i]);
      }
      setBrandID(result);
    };
  }

  return (
    <div className={styles.brands_wrapper}>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      <ul>
        {brands.map(({ name, id, createdAt }) => (
          <BrandItem
            key={createdAt}
            name={name}
            id={id}
            onClick={brandsHandler(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Brands;
