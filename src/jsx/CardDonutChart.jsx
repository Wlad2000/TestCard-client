import React from 'react';
import { PieChart, Pie, Sector, Legend, Tooltip, Cell, Label } from 'recharts';
import Card from './Card'
import { Rectangle } from './QuickBase';
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },

  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CardDonutChart = () => {
  return (
    <Card width='600px' title="CardDonutChart">
        <Rectangle
         display="flex"   >
        <PieChart width={200} height={200}>
         <Tooltip/>
              <Legend
                verticalAlign="bottom"
                align="left"
                iconType="circle"
                 />
              <Pie
                data={data}
                nameKey="name"
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
                fill="#8884d8">
                {
                  data.map((entry, index) => <Cell key={data.name} fill={COLORS[index % COLORS.length]}/>)
                }
                <Label width={30} position="center">
                  { `${data[0].value}` }
                </Label>
              </Pie>
        </PieChart>

        <PieChart width={200} height={200}>
         <Tooltip/>
              <Legend
                verticalAlign="bottom"
                align="left"
                iconType="circle"
                 />
              <Pie
                data={data}
                nameKey="name"
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
                fill="#8884d8">
                {
                  data.map((entry, index) => <Cell key={data.name} fill={COLORS[index % COLORS.length]}/>)
                }
                <Label width={30} position="center">
                  { `${data[0].value}` }
                </Label>
              </Pie>
        </PieChart>

        <PieChart width={200} height={200}>
         <Tooltip/>
              <Legend
                verticalAlign="bottom"
                align="left"
                iconType="circle"
                 />
              <Pie
                data={data}
                nameKey="name"
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
                fill="#8884d8">
                {
                  data.map((entry, index) => <Cell key={data.name} fill={COLORS[index % COLORS.length]}/>)
                }
                <Label width={30} position="center">
                  { `${data[0].value}` }
                </Label>
              </Pie>
        </PieChart>
        
        </Rectangle>
    </Card>
  )
}

export default CardDonutChart