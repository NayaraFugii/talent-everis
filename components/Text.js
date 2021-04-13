import React from 'react';

const TextArea=({
  textValue,
  textClassName,
  textPlaceholder,
  textOnChange,
  textType
})=>{

    return (
        <>
         <textarea type={textType} placeholder={textPlaceholder} value={textValue} onChange={textOnChange}
       className={textClassName}></textarea>
        </>
      )

}

export default TextArea