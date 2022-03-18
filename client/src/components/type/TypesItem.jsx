import React from "react";
import styles from "../../styles/types.module.scss";

const TypesItem = ({ name, ...rest }) => {
  return (
    <li {...rest} tabIndex={0} className={styles.types_item}>
      {name}
    </li>
  );
};

export default TypesItem;
