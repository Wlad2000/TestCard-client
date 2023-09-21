import React, { useEffect } from 'react'
import { socket } from './App'
import CardChart from './CardChart'
import CardChat from './CardChat'
import CardDonutChart from './CardDonutChart'
import CardItem from './CardItem'
import CardUser from './CardUser'
import { useItemState } from './context'
import { Rectangle } from './QuickBase'

const Home = (props) => {
    const { reload, isAuth,setCurrentUser, currentUser, setLang, lang ,imageData, setImageData } = useItemState();

    useEffect(() => {
        requestImage(currentUser.id)
    }, [reload])
    

    const requestImage = (id) => {
        socket.emit('requestImage',  id );
    
        socket.on('imageData', ({ filename, base64data }) => {
          // Отримано зображення, встановіть його як дані для відображення
          setImageData(`data:image/png;base64,${base64data}`);
        });
    
        socket.on('imageError', ({ error }) => {
          // Обробити помилку отримання зображення
        });
      };
  return (
    <Rectangle 
        display = "flex"
        padding = "50px"
        height = "100%"
    >
    <Rectangle

        width = "100%"
        display = "flex"
        alignItems = "center"
        justifyContent = "space-evenly"
        flexWrap = "wrap"  
        gridGap = "20px"
       
    >
        <CardUser />
        <CardItem data={props.data} />
        <CardChat />
        <CardChart data={props.data} />
        <CardDonutChart />

    </Rectangle>
    </Rectangle>
  )
}

export default Home