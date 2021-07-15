import './App.css';
import Wrapper from './components/Wrapper'
import {login} from  './api'
import LoginPage from './components/Login/LoginPage'
import RegistrationPage from './components/Registration/RegistrationPage'
import Main from './components/Main'
import styles, {keyframes} from 'styled-components'
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect}  from 'react-router-dom'

let animation  =  keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`

let Title = styles.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 187px;
  line-height: 172px;
  color: #343434;
  display: flex;
  margin-right:  20%;
  animation: ${animation} 1s forwards;
  @media(max-width:  1440px)  {
    font-size: 87px;
    line-height: 102px;
  }
  @media(max-width:  992px)  {
    margin-right:  120px;
  }
  @media(max-width:  769px)  {
    display: none
  }
`

function App() {
  let [user, setUser] = React.useState()

  React.useEffect(()  => {
    
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Wrapper>

        <Switch>
          <Route path='/login' render={() => <LoginPage setUser={setUser}/>} />
          <Route path='/registration' render={() => <RegistrationPage />} />
          {user && <Route path='/main' render={() => <Main user={user}/>} />}
        </Switch>

          {!user &&<Redirect  to='registration'/>}
     
        <Title>Join the <br /> team</Title>

      </Wrapper>
    </div>
    </BrowserRouter>
  );
}

export default App;
