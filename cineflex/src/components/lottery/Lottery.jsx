import React, { useState, useRef } from "react";
import styles from "./Lottery.module.scss";
import { LOTTERY } from "../../constants/Home";
import Button from "../../components/button/Button";
import InputBox from "../../components/inputbox/InputBox";
import { containsNonNumberCharacters } from "../../utils/util";

/**
 * A simple lottery component that determines if a given number is odd or even.
 * @returns {JSX.Element} Lottery component.
 */

const Lottery = () => {
  const [number, setNumber] = useState(null);
  const phoneNumberRef = useRef();
  const [input, setInput] = useState(phoneNumberRef?.current?.value);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const number = phoneNumberRef.current.value;
    //checking any other non characters are there
    //check the length of the phone number
    if (!containsNonNumberCharacters(number) && number.trim().length === 10) {
      let num = parseInt(number);

      if (num % 2 === 0) {
        setNumber("even");
      } else {
        setNumber("odd");
      }
    }
  };
  //method to throw error
  const callError = () => {
    throw new Error(LOTTERY.error);
  };
  //to monitor input validation
  const onChangeHandler = () => {
    setInput(phoneNumberRef?.current?.value);
  };
  return (
    <div className={styles["lottery"]}>
      {number ? (
        <p>{number === "odd" ? callError() : LOTTERY.success}</p>
      ) : (
        <div className={styles["lottery-form"]}>
          <span>{LOTTERY.description}</span>
          <div>
            <form onSubmit={onSubmitHandler}>
              <InputBox
                placeholder={LOTTERY.placeHolder}
                styleName={"lottery-input"}
                ref={phoneNumberRef}
                onChange={onChangeHandler}
              />
              <Button
                value={LOTTERY.button}
                styleName={"lottery-button"}
                disabled={
                  input?.length !== 10 || containsNonNumberCharacters(input)
                }
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lottery;
