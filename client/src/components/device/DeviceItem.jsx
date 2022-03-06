import React from "react";
import styles from "../../styles/devices.module.scss";
import { LOCAL_HOST } from "../../constants/internalLinks";
const DeviceItem = ({ img, id, name, price }) => {
  return (
    <li className={styles.device_item}>
      <img src={`${LOCAL_HOST}/${img}`} alt={id} />
      <h4 className={styles.device_name}>{name}</h4>
      <p>{price}$</p>
    </li>
  );
};

export default DeviceItem;
