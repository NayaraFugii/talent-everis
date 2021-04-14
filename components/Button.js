import React from 'react';

const ButtonApp=({

  buttonOnClick,
  buttonText,
  btnClassName,
  buttonImage

  })=>{
    return (
        <>
          <button onClick={buttonOnClick} className={btnClassName}><img src= {buttonImage}></img>{buttonText}</button>
        </>
      )

}

export default ButtonApp