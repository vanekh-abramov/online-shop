import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/devices.module.scss";
import DeviceItem from "./DeviceItem";

const Devices = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/device")
      .then((res) => setPosts(res.data.rows))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(post);

  return (
    <ul className={styles.devices}>
      {post.map(({ id, name, price, img, createdAt }) => (
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
