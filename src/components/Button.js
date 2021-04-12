import React from 'react';

const ButtonApp=({
  buttonOnClick,
  buttonText,
  btnClassName
})=>{
    return (
        <>
        <button onClick={buttonOnClick} className={btnClassName}>{buttonText}</button>
        </>
      )

}

export default ButtonApp