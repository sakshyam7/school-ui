import React from 'react'
import './Message.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Message = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <div className="new-message-form">
      <h2 className="form-heading">Write New Message</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input type="text" id="recipient" name="recipient" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <div className="form-buttons">
          <button type="submit" className="send-button">Send</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
        </div>
    </div>
  )
}

export default Message
