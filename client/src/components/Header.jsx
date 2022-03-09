import React from "react";
import styles from "../styles/header.module.scss";
import { NavLink } from "react-router-dom";
import {
  BASKET_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
} from "../constants/routerLinks";

const Header = () => {
  return (
    <header className={styles.header}>
      Header
      <nav className={styles.nav}>
        <NavLink className={styles.nav_item} to={HOME_ROUTE}>
          Home
        </NavLink>
        <NavLink className={styles.nav_item} to={CATALOG_ROUTE}>
          Catalog
        </NavLink>
        <NavLink className={styles.nav_item} to={BASKET_ROUTE}>
          Basket
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
