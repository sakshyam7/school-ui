import React from 'react'
import './Attendance.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { CircularProgressbar } from "react-circular-progressbar";


const Attendance = () => {
  const data = [
    {
      name: 'First Sem',
      uv: 33,
      
    },
    {
      name: 'Second Sem',
      uv: 30,
    },
    {
      name: 'Third Sem',
      uv: 34,
    },
    {
      name: 'Fourth Sem',
      uv: 30,
    },
    {
      name: 'Fifth Sem',
      uv: 34,
    },
    {
      name: 'Sixth Sem',
      uv: 31,
    },
    {
      name: 'Seventh sem',
      uv: 24,
    },
    {
      name: 'Eight Sem',
      uv: 10,
    },
  ];
  const bbadata = [
    {
      name: 'First Sem',
      uv: 95,
      
    },
    {
      name: 'Second Sem',
      uv: 94,
    },
    {
      name: 'Third Sem',
      uv: 95,
    },
    {
      name: 'Fourth Sem',
      uv: 89,
    },
    {
      name: 'Fifth Sem',
      uv: 85,
    },
    {
      name: 'Sixth Sem',
      uv: 86,
    },
    {
      name: 'Seventh sem',
      uv: 69,
    },
    {
      name: 'Eight Sem',
      uv: 64,
    },
  ];
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <h3 className="title">Bsc Csit average attendance by month</h3>
      <div className="chart">
        <div className="linechart">
      <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="red" />
        </LineChart>
        </div>
        <div className="featuredChart">
          <CircularProgressbar value={75} text={"60%"} strokeWidth={5} />
        </div>

      </div>
      <h3 className="title">BBA average attendance by month</h3>
      <div className="chart">
      <div className="linechart">
      <LineChart
          width={800}
          height={300}
          data={bbadata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="red" />
        </LineChart>
        </div>
        <div className="featuredChart">
          <CircularProgressbar value={60} text={"83%"} strokeWidth={5} />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Attendance
