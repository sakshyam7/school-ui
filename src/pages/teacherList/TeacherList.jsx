import React from 'react'
import './TeacherList.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TeacherTable from '../../components/teachertable/TeacherTable'

const TeacherList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <TeacherTable />

      </div>
    </div>
  )
}

export default TeacherList
