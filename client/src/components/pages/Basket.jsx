import React, { useContext } from "react";
import { Context } from "../../context";
import styles from "../../styles/basket.module.scss";

const Basket = () => {
  const { basketDevice } = useContext(Context);

  return (
    <div className={styles.container}>
      {basketDevice.map(({ id, name, price, createdAt, img }) => (
        <div key={createdAt} className={styles.device_wrapper}>
          <img
            src={`http://localhost:5000/${img}`}
            alt={name}
            className={styles.device_img}
          />
          <h3 className={styles.device_name}>{name}</h3>
          <p className={styles.device_price}>{price}$</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
