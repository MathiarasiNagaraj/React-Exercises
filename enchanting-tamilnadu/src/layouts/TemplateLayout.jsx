import React from "react";
import { Outlet } from "react-router";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import Navbar from "../components/Navbar/Navbar";

/**
 *
 * @returns Template component
 */

const TemplateLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ContactUsForm></ContactUsForm>
    </>
  );
};

export default TemplateLayout;
