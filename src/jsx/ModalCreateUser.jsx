import React, {  useState } from 'react'
import { socket } from './App';
import { useItemState } from './context';
import Modal from './Modal';
import { Button, Rectangle,  Input, Text } from './QuickBase';



const ModalCreateUser = (props) => {

  const [errorMessage, setErrorMessage] = useState('');

  const [registerData, setRegisterData] = useState({
    login: '',
    password: '',
    name: '',
    surname: '',
    accessLevel: 0,
    email: '',
    icon: 'user2.png',
  });

  const handleRegister = () => {
    socket.emit('register', registerData);
    socket.on('registerSuccess', (user) => {
      setErrorMessage('');
    });
    socket.on('registerError', (error) => {
      setErrorMessage(error);
    });
          // GET data
    socket.emit('get_users');
    props.close()
   
  };




  return (
    props.opened &&
      <Modal title='Create user' close={props.close}>
          <Rectangle
            display="flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
          >
             <Text text="Registration new user"/>
             <Text color="purple" text={errorMessage}/>
             <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="text"
              placeholder="Login.."
              value={registerData.login}
              onChange={(e) =>
                setRegisterData({ ...registerData, login: e.target.value })
              }
            />
            <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="password"
              placeholder="Password.."
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
            <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="number"
              placeholder="access level.."
              value={registerData.accessLevel}
              min="0" max="2"
              onChange={(e) =>
                setRegisterData({ ...registerData, accessLevel: e.target.value })
              }
            />
             <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="text"
              placeholder="Name.."
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
             <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="text"
              placeholder="Surname.."
              value={registerData.surname}
              onChange={(e) =>
                setRegisterData({ ...registerData, surname: e.target.value })
              }
            />
             <Input
                fontSize = "15px"
                width = "40%"
                border = "none"
                background = "none"
                color = "purple"
                borderBottom = "3px solid purple"
              type="text"
              placeholder="Email.."
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
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
              onClick={handleRegister} 
              text={"Create New User"}
            />  
          

          </Rectangle>
      </Modal>
  )
}

export default ModalCreateUser

