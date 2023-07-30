import React from 'react'
import './ExamList.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ExamTable from '../../components/examtable/ExamTable'

const ExamList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ExamTable />
        </div>
      </div>
  )
}

export default ExamList
