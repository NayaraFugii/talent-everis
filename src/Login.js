import React from 'react'
import './style/Login.css'
import { useState } from 'react'
import Input from './components/Input'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'
import logo from './img/logo.png'


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
    <div className= "background">
    <header>
    <img src={logo} alt="" className="logo" id="logo"/>
    </header>
    <form className="formLogin">
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
         </form>
        </div>
    </>
  );
}

export default LoginApp;