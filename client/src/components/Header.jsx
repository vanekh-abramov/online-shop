import React from "react";
import styles from "../styles/header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      Header
      <nav className={styles.nav}>
        <NavLink className={styles.nav_item} extend="true" aria-current="page" to={"/"}>
          Home
        </NavLink>
        <NavLink className={styles.nav_item} to={"/catalog"}>Catalog</NavLink>
        <NavLink className={styles.nav_item} to={"/basket"}>Basket</NavLink>
      </nav>
    </header>
  );
};

export default Header;
