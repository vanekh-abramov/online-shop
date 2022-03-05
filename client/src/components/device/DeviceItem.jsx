import React from 'react'
import styles from "../../styles/devices.module.scss";

const DeviceItem = ({createdAt, id, name, price}) => {
  return (
      <li key={createdAt} className={styles.device_item}>
        <img src='data:image/jpeg;base64,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' alt={id} />
        <h4 className={styles.device_name}>{name}</h4>
        <p>{price}</p>
      </li>
  )
}

export default DeviceItem