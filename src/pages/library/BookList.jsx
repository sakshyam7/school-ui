import React from 'react'
import './BookList.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import BookTable from '../../components/booktable/BookTable'

const BookList = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <BookTable/>
      </div>
    </div>
  );
}

export default BookList
