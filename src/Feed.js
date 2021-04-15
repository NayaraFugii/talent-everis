import React from 'react'
import {useEffect, useState } from 'react';
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
  const [posts, setPosts] = useState()
  const userName = localStorage.getItem("user")

  useEffect(() => {
    getPosts()
}, [])

const getPosts = async () => {
    const response = await db.collection("post").get()
    const result = response.docs.map(item => {
        return {
            postId: item.id,
            data: item.data()
        }})
    setPosts(result)
    }



  const newPost = async (e) => {
    e.preventDefault()
    var docRef = db.collection("users").doc(userId);

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log(doc)
        if (post) {
          let newPostObject = {
            text: post,
            id: userId,
            user: doc.data().user,
            like: 0,
            likes:[],
            coment: ""
          }
          db.collection("post").doc().set({
            ...newPostObject,
        

          })
          console.log(newPostObject)
          setPosts(prevState => {
            // Object.assign would also work
            return [...prevState, {
              postId: "teste",
              data: {
                user: userName,
                text: post,
                userName : userName,
                coment:{
                  comment: ""
                }
              }
            }]
          });
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
          <Tweets posts = {posts} />
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