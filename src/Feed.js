import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import ButtonApp from './components/Button'
import TextArea from './components/Text'
import Tweets from './components/Tweets'
import firebase from './firebase'
import crow from './img/crow.png'
import exit from './img/exit.png'
import profile from './img/profile.png'
import './style/Feed.css'

function Feed() {
  const [post, setPost] = useState("");
  const userId = localStorage.getItem("uid")
  const db = firebase.firestore();
  const history = useHistory();


  const newPost = async (e) => {
    e.preventDefault()
    var docRef = db.collection("users").doc(userId);

    docRef.get().then((doc) => {
      if (doc.exists) {
        if (post) {
          let newPostArray = {
            text: post,
            id: userId,
            user: doc.data().user,
            like: [],
            coment: []
          }
          db.collection("post").doc().set({
            ...newPostArray,
            rt: [],

          })
          console.log(newPostArray)
        } else {
          console.log(" deu ruim")
        }

      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });


  }

  const routerHome = () => {
    history.push('/')
  }

  const logout = async (e) => {
    e.preventDefault()
    localStorage.removeItem("uid");
    await firebase.auth().signOut().then(() => {
      routerHome()

    })
  }

  const routerProfile = () => {
    history.push('/profile')
  }
  return (
    <>
    <div className="flexContainer">
      <nav className="nav">
        <img src={crow} alt="" className="logoCrow" id="logo"/>
        <ButtonApp
          buttonOnClick = {routerProfile}
          buttonImage= {profile}
          buttonText="Perfil"
          btnClassName="btnProfile"
        />          
      </nav>
      <div className="FeedArea">
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
          <Tweets />
      </div>
      <div>
        <ButtonApp
          buttonOnClick = {logout}
          buttonImage= {exit}
          btnClassName="btnExit"
        />          
          </div>
        </div>

    </>
  );
}

export default Feed;