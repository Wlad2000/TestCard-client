import React from 'react'
import CardChart from './CardChart'
import CardItem from './CardItem'
import CardUser from './CardUser'
import { Rectangle } from './QuickBase'

const Home = (props) => {
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
        <CardChart data={props.data} />

    </Rectangle>
    </Rectangle>
  )
}

export default Home