import React, { useContext } from "react";
import { TYPE_URL, API_URL, LOCAL_HOST } from "../../constants/internalLinks";
import { Context } from "../../context";
import useFetch from "../../hooks/useFetch";
import styles from "../../styles/types.module.scss";
import TypesItem from "./TypesItem";

const Types = () => {
  const { setTypeID } = useContext(Context);

  const [types, loading, error] = useFetch(
    `${LOCAL_HOST}/${API_URL}/${TYPE_URL}`
  );

  function typesHandler(id) {
    return () => {
      setTypeID(id);
    };
  }

  return (
    <ul className={styles.container}>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {types.map(({ name, createdAt, id }) => (
        <TypesItem
          key={createdAt}
          name={name}
          onClick={typesHandler(id)}
        />
      ))}
    </ul>
  );
};

export default Types;
