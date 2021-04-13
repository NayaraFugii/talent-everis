import React from 'react'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'

function Feed() {

    const history = useHistory()

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
      <h1>Feed</h1>
      <ButtonApp
        buttonOnClick = {logout}
        buttonText="Sair"
        btnClassName="btnExit"
      />

    </>
  );
}

export default Feed;