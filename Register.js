import React from 'react'
import { useState } from 'react';
import Input from './components/Input'
import ButtonApp from './components/Button'
import firebase  from './firebase'



function RegisterApp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, userEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = firebase.firestore();

    const newUser = (e)=>{
        e.preventDefault()
        try{
            if(!name || !email || !user || !password || password.length < 6){
               throw Error('Erro ao efetuar o cadastro')
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
            const userId = firebase.auth().currentUser.uid            
            db.collection("users").doc(userId).set({
                name: name[0].toUpperCase() + name.slice(1),
                email: email,
                user: user
            })
        }catch(error){
            console.log(error)
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
                inputPlaceholder=" Digite sua senha 6 digitos"
                inputValue={password}
                inputOnChange={(event) => setPassword(event.target.value)}
                inputClassName="RegisterInput"
            />

            <ButtonApp
                buttonOnClick = {newUser}
                buttonText="Cadastrar"
                btnClassName="btnForm"
                />
        </>
    );
}

export default RegisterApp;