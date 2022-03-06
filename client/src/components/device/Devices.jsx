import React from "react";
import styles from "../../styles/devices.module.scss";
import DeviceItem from "./DeviceItem";
import { LOCAL_HOST, API_URL, DEVICE_URL } from "../../constants/internalLinks";
import useFetch from "../../hooks/useFetch";

const Devices = () => {

  const [devices, loading, error] = useFetch(`${LOCAL_HOST}/${API_URL}/${DEVICE_URL}`);

  return (
    <ul className={styles.devices}>
      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {devices.rows?.map(({ id, name, price, img, createdAt }) => (
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
