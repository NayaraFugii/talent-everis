import ButtonApp from './components/Button'
import { useHistory } from 'react-router-dom'
import Logo from './img/logo.png'
import './style/HomeApp.css'


function HomeApp() {

  const history = useHistory()

  const routerLogin = () => {
    history.push('/login')
  }

  const routerRegister = () => {
    history.push('/register')
  }
  
  return (
    <>
      <div className='home'>
        <img className='logoHome'src={Logo} alt='Corvo com as asas abertas com a palavra crow escrito embaixo'/>
        <div className='buttonsHome'>
            <ButtonApp 
              buttonOnClick ={routerLogin}  
              buttonText="Login"
              btnClassName="btnLogin"
            />

          <ButtonApp 
            buttonOnClick ={routerRegister}    
            buttonText="Cadastro"
            btnClassName="btnLogin"
          />
        </div>
      </div>
    </>
  );
}

export default HomeApp;
