import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.scss";
import { useAuthContext } from "../../auth/AuthContext";

/**
 * A navigation link component that represents a link in the navigation bar.
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data containing link information.
 * @param {string} props.data.name - The name or label of the link.
 * @param {string} props.data.url - The URL of the link.
 * @param {boolean} props.data.isPrivate - Flag indicating if the link is for private access.
 * @returns {JSX.Element} Navlink component.
 */

const Navlink = (props) => {
  const { name, url, isPrivate } = props.data;
  const { user } = useAuthContext();
  return (
    <>
      {!isPrivate || (isPrivate && user.userEmail) ? (
        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive ? styles["active"] : styles["inactive"]
          }
        >
          {name}
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
};

Navlink.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navlink;
