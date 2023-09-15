import React, { useState } from 'react'
import { socket } from './App';
import { useItemState } from './context';

import Modal from './Modal'
import { Button, Input, Rectangle, Text } from './QuickBase';

const Login = () => {
    const [loginData, setLoginData] = useState({ login: '', password: '' });
    const {currentUser, setCurrentUser , isAuth, setIsAuth} = useItemState();



  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    socket.emit('login', loginData);
    socket.on('loginSuccess', (user) => {
      setCurrentUser(user);
      setIsAuth(true);
      localStorage.setItem('user', JSON.stringify(user));
      setErrorMessage('');
    });
    socket.on('loginError', (error) => {
      setErrorMessage(error);
    });
  };



  return (
    <Modal title="Login">
      {currentUser ? (
        <div>
          <h1>Ви увійшли як {currentUser.login}</h1>
         
        </div>
      ) : (
        <Rectangle
            display = "flex"
            alignItems = "center"
            justifyContent = "center"
            flexDirection = "column"
            height ="100%"
            rowGap = "10%"
            backdropFilter="blur(10px)"
            background= " linear-gradient(90deg, #c989d1e0 0%, rgba(215,187,226,1) 50%, #d577efc8 100%)"
        >
          <Text 
            color = "#2b0231"
            fontSize = "25px"
            text="Authorization"
        />

            <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="text"
              placeholder="Login.."
              value={loginData.login}
              onChange={(e) =>
                setLoginData({ ...loginData, login: e.target.value })
              }
            />
            <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                color = "purple"
                background = "none"
                borderBottom = "3px solid purple"
              type="password"
              placeholder="Password.."
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <Button
              cursor = "pointer"
              backgroundColor = "purple"
              color = "#fff"
              border = "none"
              width = "50%"
              marginBottom = "5px"
              height = "30px" 
              borderRadius = "20px"
              onClick={handleLogin} 
              text={"Login"}
            />  
            
            <Text color="purple" text={errorMessage}/>
        </Rectangle>
      )}
    </Modal>
  )
}

export default Login
