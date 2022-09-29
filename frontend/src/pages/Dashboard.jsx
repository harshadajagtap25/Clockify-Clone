import React from 'react'
import BarChart from '../Components/dashboard/BarChart'
import { PiChart } from '../Components/dashboard/PieChart'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart/>
      <PiChart/>
      </div>
  )
}

export default Dashboard