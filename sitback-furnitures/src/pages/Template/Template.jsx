import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";


/**
 * A layout template component for rendering pages.
 * This component provides a common layout structure that includes a header, navigation bar, and an outlet for rendering the content of different pages.
 * @returns {JSX.Element} - The layout template component.
 */
const Template = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};



export default Template;
