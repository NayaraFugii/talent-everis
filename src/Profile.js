import React from 'react'
import './style/Profile.css'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'
import crow from './img/crow.png'
import profile2 from './img/profile2.png'


function Profile() {
  const history = useHistory();

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
    <div className="flexContainer">
      <header className="header">
        <img src={crow} alt="" className="logoCrow"/>
      </header>
      <section className="template">
      <div className="cover">
      <img src={profile2} alt="" className="profile2"/>
      </div>
      <div className="ProfileArea"></div>
      <h1>Profile</h1>
      </section>
      <div>
        <ButtonApp
          buttonOnClick = {logout}
          buttonText="Sair"
          btnClassName="btnExit"
        />
      </div>
    </div>
    </>
  );
}

export default Profile;