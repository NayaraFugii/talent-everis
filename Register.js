import React from 'react'
import { useState } from 'react';
import Input from './components/Input'
import ButtonApp from './components/Button'
import firebase from './firebase'


function RegisterApp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, userEmail] = useState("");
    const [password, setPassword] = useState("");

    const newUser = (e)=>{
        e.preventDefault()
        
        if(!name || !email || !user || !password){
        console.log("deu ruim")
        }else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            const userId = firebase.auth().currentUser.uid            
            console.log(userId, name, email, user)
        }
       
    }
    return (
        <>
        <h1> Cadastro</h1>
            <Input   
                inputType="text"
                inputPlaceholder=" Digite seu Nome"
                inputValue={name}
                inputOnChange={(event) => setName(event.target.value)}
                inputClassName="RegisterInput"
            />
                
            <Input   
                inputType="text"
                inputPlaceholder=" Digite seu E-mail"
                inputValue={email}
                inputOnChange={(event) => setEmail(event.target.value)}
                inputClassName="RegisterInput"
            />

            <Input   
                inputType="text"
                inputPlaceholder=" Digite seu usuário"
                inputValue={user}
                inputOnChange={(event) => userEmail(event.target.value)}
                inputClassName="RegisterInput"
            />

            <Input   
                inputType="password"
                inputPlaceholder=" Digite sua senha"
                inputValue={password}
                inputOnChange={(event) => setPassword(event.target.value)}
                inputClassName="RegisterInput"
            />

            <ButtonApp
                buttonOnClick = {newUser}
                buttonText="Login"
                btnClassName="btnForm"
                />
        </>
    );
}

export default RegisterApp;