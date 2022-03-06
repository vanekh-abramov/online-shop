import React from 'react'
import styles from "../../styles/types.module.scss";

const TypesItem = ({name}) => {
  return (
    <li className={styles.types_item}>{name}</li>
  )
}

export default TypesItem