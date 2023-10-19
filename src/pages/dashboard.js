import React from 'react'
import Showtable from "../components/showtabel"
import Chartdata from '../components/chartdata'
import TableData from "../data/tabledata.json"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Showtable TableData={TableData}/>
      <Chartdata/>
    </div>
  )
}

export default Dashboard