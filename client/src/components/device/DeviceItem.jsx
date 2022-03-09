import React from "react";
import styles from "../../styles/devices.module.scss";
import { LOCAL_HOST } from "../../constants/internalLinks";
import { useNavigate } from "react-router-dom";

const DeviceItem = ({ img, id, name, price }) => {
  let navigate  = useNavigate();
  console.log(navigate )

  return (
    <li className={styles.device_item}>
      <img src={`${LOCAL_HOST}/${img}`} alt={id} />
      <h4 className={styles.device_name}>{name}</h4>
      <p>{price}$</p>
    </li>
  );
};

export default DeviceItem;
