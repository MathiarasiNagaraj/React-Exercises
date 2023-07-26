import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./List.module.scss";
import { NavLink, useLocation } from "react-router-dom";

/**
 * A reusable component for rendering a navigation link.
 * @param {Object} props - The props for the List component.
 * @param {string} props.list - The text content of the navigation link.
 * @returns {JSX.Element} - The navigation link wrapped in NavLink.
 */

const List = props => {
  const { list } = props
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("id");
  const [active, setActive] = useState(false);
  useEffect(() => {
    const isActive = list.toLowerCase() === name?.toLowerCase();
    setActive(isActive)
  },[location])

  return (
    <NavLink
    className={`${active ? styles.active : ""} ${styles.list}`}
    to={`/categories?id=${list.toLowerCase()}`}
    >
      {list}
    </NavLink>
  );
};

List.propTypes = {
  list: PropTypes.string.isRequired,
};

export default List;
