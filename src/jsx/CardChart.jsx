import React from 'react'
import Card from './Card'
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  


const CardChart = ({data}) => {
  return (
    <Card title="CARD CHART" width='500px'>
        <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="tempgrain" stroke="#15b522" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="tempgrainmax"
        stroke="#F44236"
        strokeWidth={3}
      />
      <Line type="monotone" dataKey="tempgraincritical" stroke="#FFCA29" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
    </Card>
  )
}

export default CardChart