import React from "react";
import styles from "../../styles/devices.module.scss";
import { LOCAL_HOST } from "../../constants/internalLinks";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../constants/routerLinks";

const DeviceItem = ({ img, id, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${DEVICE_ROUTE}/${id}`);
  };

  return (
    <li id={id} onClick={() => handleClick()} className={styles.device_item}>
      <img src={`${LOCAL_HOST}/${img}`} alt={id} />
      <h4 className={styles.device_name}>{name}</h4>
      <p>{price}$</p>
    </li>
  );
};

export default DeviceItem;
