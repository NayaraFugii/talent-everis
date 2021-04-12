import React from 'react'
import { useState } from 'react';
import Input from './components/Input'
import ButtonApp from './components/Button'


function LoginApp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const acess = (e)=>{
        e.preventDefault()
        console.log(email, password)
    }
  return (
    <>
    <h1>Login</h1>
      <Input   
          inputType="text"
          inputPlaceholder=" Digite seu E-mail"
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          inputClassName="LoginInput"
        />

      <Input   
        inputType="password"
        inputPlaceholder=" Digite sua senha"
        inputValue={password}
        inputOnChange={(event) => setPassword(event.target.value)}
        inputClassName="LoginInput"
      />

      <ButtonApp
          buttonOnClick = {acess}
          buttonText="Login"
          btnClassName="btnForm"
        />
    </>
  );
}

export default LoginApp;