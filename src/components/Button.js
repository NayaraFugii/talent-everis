import React from 'react';

const ButtonApp=({

  buttonOnClick,
  buttonText,
  btnClassName,
  buttonImage

  })=>{
    return (
        <>
          <button onClick={buttonOnClick} className={btnClassName}>{buttonText} <img src= {buttonImage}></img></button>
        </>
      )

}

export default ButtonApp