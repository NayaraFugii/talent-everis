import ButtonApp from './components/Button'
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'


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
    </>
  );
}

export default HomeApp;
