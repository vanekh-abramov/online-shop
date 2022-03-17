import React, { useState } from "react";
import styles from "../../styles/brands.module.scss";

const BrandItem = ({ name, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const myClass = [styles.brand_item];

  if (isActive) {
    myClass.push(styles.active);
  }

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <li onFocus={toggleHandler} tabIndex={2} {...rest} className={myClass.join(" ")}>
      {name}
    </li>
  );
};

export default BrandItem;
