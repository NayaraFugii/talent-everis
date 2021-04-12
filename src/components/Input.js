import React from 'react';

const InputApp=({
  inputValue,
  inputClassName,
  inputPlaceholder,
  inputOnChange,
  inputType
})=>{

    return (
        <>
         <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputOnChange}
       className={inputClassName}/>
        </>
      )

}

export default InputApp