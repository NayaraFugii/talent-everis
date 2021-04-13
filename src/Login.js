import React from 'react'
import { useState } from 'react';
import Input from './components/Input'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'


function LoginApp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const routerFeed = () => {
        history.push('/feed')
    }
    const acess = async(e)=>{
      e.preventDefault()
      try {
        if(!email||!password){
          throw Error('login invalido')
        }

      await firebase.auth().signInWithEmailAndPassword(email, password)
  
      const userId = await firebase.auth().currentUser.uid
      localStorage.setItem("uid", userId);
      routerFeed();
        
      } catch (error) {
        console.log(error)
      }
      
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