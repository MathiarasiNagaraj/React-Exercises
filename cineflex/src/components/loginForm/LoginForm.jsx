import React, { useEffect, useRef } from "react";
import styles from "./LoginForm.module.scss";
import InputBox from "../inputbox/InputBox";
import Button from "../button/Button";
import { LOGIN } from "../../constants/Login";
import { useAuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { users } from "../../services/data";

/**
 * A login form component.
 * @returns {JSX.Element} LoginForm component.
 */

const LoginForm = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    setUser(() => ({
      userEmail: "",
      userPassword: "",
      userName:""
    }));
  }, []);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  //form handling 
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const foundUser = users.find(
      (user) =>
        user.userEmail == emailValue && user.userPassword == passwordValue
    );
    //if the user found set that to user in context and navigate to home
    if (foundUser) {
      setUser(() => ({
        userEmail: emailValue,
        userPassword: passwordValue,
        userName:foundUser.name
      }));
      localStorage.setItem("islogged", true);
      localStorage.setItem("userName", foundUser.name);
      formRef.current.reset();
      navigate("/",{replace:true});
    }
  };

  return (
    <form
      className={styles["login-form"]}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <h1>{LOGIN.title}</h1>
      <p>{LOGIN.description}</p>

      <div>
        <label htmlFor="email">{LOGIN.fields[0].label}</label>
        <InputBox
          placeholder={LOGIN.fields[0].placeHolder}
          ref={emailRef}
          styleName="login-input"
        />
      </div>
      <div>
        <label htmlFor="password">{LOGIN.fields[1].label}</label>
        <InputBox
          placeholder={LOGIN.fields[1].placeHolder}
          ref={passwordRef}
          styleName="login-input"
        />
      </div>

      <Button value={LOGIN.button} styleName="login-button" />
    </form>
  );
};

export default LoginForm;
