import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.scss";
import { useAuthContext } from "../../auth/AuthContext";
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
