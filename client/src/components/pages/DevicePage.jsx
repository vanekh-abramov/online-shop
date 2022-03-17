/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/device-page.module.scss";
import { API_URL, LOCAL_HOST } from "../../constants/internalLinks";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context";

const DevicePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const currentLocation = location.pathname;
  const {basketDevice, setBasketDevice} = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${LOCAL_HOST}/${API_URL}/${currentLocation}`
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addBasket = () => {
    setBasketDevice([...basketDevice, data])
  }
  console.log(basketDevice)

  return (
    <div className={styles.container}>
      {error && <div>{error}</div>}
      {loading && <div>loading</div>}
      <img src={`${LOCAL_HOST}/${data.img}`} alt="" />
      <h2 className={styles.device_name}>{data.name}</h2>
      <div className={styles.basket_container}>
        <p className={styles.price}>{data.price}$</p>
        <button className={styles.basket_btn} onClick={addBasket}>add in basket</button>
      </div>
    </div>
  );
};

export default DevicePage;
