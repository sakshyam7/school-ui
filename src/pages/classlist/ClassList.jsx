import React from 'react'
import './ClassList.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MyClassTable from '../../components/myclasstable/MyClassTable'

const ClassList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <MyClassTable/>
        </div>
      </div>
  )
}

export default ClassList
