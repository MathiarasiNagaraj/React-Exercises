import React, { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";
import DropDownBox from "../DropDownBox/DropDownBox";
import InputBox from "../InputBox/InputBox";
import styles from "./ContactUsForm.module.scss";
import { getPlace } from "../../services/data";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import { useParams } from "react-router";
import { CONTACT_FORM_ERROR } from "../../constants/error";
import { BUTTON } from "../../constants/component";

//initial state of form
const initialState = {
  name: "",
  source: "",
  destination: "",
  contact: "",
};

/**
 *
 * @returns contact form component
 */
const ContactUsForm = () => {
  const param = useParams();

  const [city, setCity] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState(initialState);

  const [userInput, setUserInput] = useState(initialState);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const allCity = await getPlace();
      setCity(allCity);
    };

    fetchData();
  }, []);
  //form handling and input validation

  const inputHandler = (identifier, value) => {
    if (identifier === "name") {
      setUserInput((prevValues) => ({ ...prevValues, name: value }));
    } else if (identifier === "source") {
      setUserInput((prevValues) => ({ ...prevValues, source: value }));
    } else if (identifier === "destination") {
      setUserInput((prevValues) => ({ ...prevValues, destination: value }));
    } else {
      setUserInput((prevValues) => ({ ...prevValues, contact: value }));
    }
  };

  const onChangeHandler = (data) => {
    inputHandler(data.identifier, data.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Validate name
    if (userInput.name.trim().length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: CONTACT_FORM_ERROR.name,
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    if (userInput.source === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        source: "Choose any one city",
      }));
    }

    if (userInput.destination === userInput.source) {
      if (userInput.destination === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          destination: "Choose any one city",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          destination: CONTACT_FORM_ERROR.destination,
        }));
        formIsValid = false;
      }
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, destination: "" }));
    }

    // Validate contact
    if (userInput.contact.trim().length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: CONTACT_FORM_ERROR.contact,
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, contact: "" }));
    }

    // Submit the form if it is valid
    if (formIsValid) {
      // Handle form submission
      setData(userInput);
      setShow(true);
      formRef.current.reset();
    }
  };

  useEffect(() => {
    setShow(false);
    formRef.current.reset();
  }, [param]);

 
  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler} ref={formRef}>
        <h2>Contant Us</h2>
        <p>Our Sales Team will reach out to you ASAP!</p>

        <label htmlFor="name">Name</label>
        <InputBox
          onChange={onChangeHandler}
          identifier="name"
          value={userInput.name}
          error={errors.name}
        />

        <label htmlFor="source">Your Home Town</label>
        <DropDownBox
          data={city.map((item) => item.city)}
          onChange={onChangeHandler}
          identifier="source"
          value={userInput.source}
          error={errors.source}
        />

        <label htmlFor="destination">Where would you like to go?</label>
        <DropDownBox
          data={city.map((item) => item.city)}
          onChange={onChangeHandler}
          identifier="destination"
          value={userInput.destination}
          error={errors.destination}
        />

        <label htmlFor="contact">Contact Number</label>
        <InputBox
          onChange={onChangeHandler}
          identifier="contact"
          value={userInput.contact}
          error={errors.contact}
        />

        <Button button={BUTTON.submit} styleClass="submit" />
      </form>
      {show && <SuccessBanner data={data} />}
    </div>
  );
};

export default ContactUsForm;
