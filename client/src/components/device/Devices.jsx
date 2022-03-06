import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/devices.module.scss";
import DeviceItem from "./DeviceItem";
import { LOCAL_HOST, API_URL, DEVICE_URL } from "../../constants/internalLinks";


const Devices = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(`${LOCAL_HOST}/${API_URL}/${DEVICE_URL}`)
      .then((res) => setCard(res.data.rows))
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <ul className={styles.devices}>
      {card.map(({ id, name, price, img, createdAt }) => (
        <DeviceItem
          key={createdAt}
          id={id}
          name={name}
          price={price}
          img={img}
          createdAt={createdAt}
        />
      ))}
    </ul>
  );
};

export default Devices;
