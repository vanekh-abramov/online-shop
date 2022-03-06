import React from "react";
import { TYPE_URL, API_URL, LOCAL_HOST } from "../../constants/internalLinks";
import useFetch from "../../hooks/useFetch";
import styles from "../../styles/types.module.scss";
import TypesItem from "./TypesItem";

const Types = () => {
  const [types, loading, error] = useFetch(
    `${LOCAL_HOST}/${API_URL}/${TYPE_URL}`
  );

  return (
    <ul className={styles.container}>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {types.map(({ name, createdAt }) => (
        <TypesItem key={createdAt} name={name}/>
      ))}
    </ul>
  );
};

export default Types;
