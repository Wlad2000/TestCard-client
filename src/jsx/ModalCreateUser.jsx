import React, {  useState } from 'react'
import { socket } from './App';
import { useItemState } from './context';
import Modal from './Modal';
import { useTranslation } from 'react-i18next'
import { ColumnLayout } from '../quick/QuickLayouts';
import { Text } from '../quick/QuickBase';
import { Button, Input } from '../quick/QuickControls';



const ModalCreateUser = (props) => {
  const {t,i18n} = useTranslation() 
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
      <Modal title={t("modalCreate.title2")} close={props.close}>
          <ColumnLayout
            justifyContent = "center"
            alignItems = "center"
            rowGap = "20px"
            padding = "20px"
          >
             <Text fontSize="15px" color="purple" text={errorMessage}/>
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
              text={t("modalCreate.createBtn2")}
            />  
          

          </ColumnLayout>
      </Modal>
  )
}

export default ModalCreateUser

