import React,{useState,useRef} from 'react'
import styles from './Lottery.module.scss'
import { LOTTERY } from '../../constants/Home'
import Button from "../../components/button/Button";
import InputBox from "../../components/inputbox/InputBox";


/**
 * A simple lottery component that determines if a given number is odd or even.
 * @returns {JSX.Element} Lottery component.
 */


const Lottery = () => {
    const [number, setNumber] = useState(null);
    const phoneNumberRef = useRef();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const number = parseInt(phoneNumberRef.current.value);
          if (number % 2 === 0) {
            setNumber("even")
          } else {
    setNumber("odd")
        }
    };
    
    const callError=() => {
        throw new Error(LOTTERY.error)
      }
    return (
      
<div className={styles["lottery"]}>
              {number ? <p>{number==="odd"?callError():LOTTERY.success}</p> :
                  <div className={styles["lottery-form"]}>
                      <span>{LOTTERY.description}</span>
                      <div >
                          <form onSubmit={onSubmitHandler}>
                              <InputBox
                                  placeholder={LOTTERY.placeHolder}
                                  styleName={"lottery-input"}
                                  ref={phoneNumberRef}
                              />
                              <Button value={LOTTERY.button} styleName={"lottery-button"} />
                          </form>
                      </div>
                  </div>}
        </div>
  )
}



export default Lottery