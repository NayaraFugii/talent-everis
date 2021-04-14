import React from 'react'
import './style/Profile.css'
import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import firebase  from './firebase'
import crow from './img/crow.png'
import profile2 from './img/profile2.png'
import home from './img/home.png'
import exit from './img/exit.png'


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
  const routerProfile = () => {
    history.push('/feed')
  }


  return (
    <>
    <div className="flexContainer">
      <nav className="nav">
        <img src={crow} alt="" className="logoCrow"/>
        <ButtonApp
          buttonOnClick = {routerProfile}
          buttonImage= {home}
          buttonText="Feed"
          btnClassName="btnProfile"
        />    
      </nav>
      <section className="template">
      <div className="cover">
      <img src={profile2} alt="" className="profile2"/>
      </div>
      <div className="ProfileArea"></div>
      </section>
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

export default Profile;