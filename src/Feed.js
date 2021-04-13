import React from 'react'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'
import TextArea from './components/Text'
import { useState } from 'react';

function Feed() {
  const [post, setPost] = useState("");
  const userId = localStorage.getItem("uid")
  //let docRef = db.collection("post").doc();
  //const db = firebase.firestore();
   //let userRef = db.collection('users').doc(userId).get();
  const history = useHistory();
  const username = firebase.auth().currentUser


  console.log(username)
  const newPost= async(e)=>{
    e.preventDefault()
  
    try{
      if(post){
        console.log("deu certo")
        let newPostArray = {
         text: post,
          id:userId,
          //user: firebase.auth().currentUser.user,
          like: [],        
        }  
        console.log(newPostArray)    
      }else{
        console.log(" deu ruim")
      }
   
    }catch(error){
      console.log("nao deu")
    }
    
  }

    const routerHome = () => {
        history.push('/')
    }

    const logout = async(e)=>{
      e.preventDefault() 
      localStorage.removeItem("uid");
      await firebase.auth().signOut().then(() => {
         routerHome()

       })

    }  


  return (
    <>
      <TextArea
       textClassName="textFeed"
       textPlaceholder="O que está acontecendo?"
       textOnChange={(event) => setPost(event.target.value)}
       textType= "text"
      />
       <ButtonApp
        buttonOnClick = {newPost}
        buttonText="Tweet"
        btnClassName="btnPost"
      />

      <ButtonApp
        buttonOnClick = {logout}
        buttonText="Sair"
        btnClassName="btnExit"
      />

    </>
  );
}

export default Feed;