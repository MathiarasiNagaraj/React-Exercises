export const MinuteTimeFormat = (duration) => {
  
    let time = "00";
    
    time +=":"+(duration<10?"0"+ duration:duration);
  
     


  return time;
};

export const containsNonNumberCharacters=(str) =>{
    return /\D/.test(str);
  }