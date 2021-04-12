import ButtonApp from './components/Button'

function HomeApp() {
  return (
    <>
      <ButtonApp    
          buttonText="Login"
          btnClassName="btnLogin"
        />

      <ButtonApp    
        buttonText="Cadastro"
        btnClassName="btnLogin"
      />
    </>
  );
}

export default HomeApp;
