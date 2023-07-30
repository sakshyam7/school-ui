import React from 'react'
import './ExamForm.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const ExamForm = ({ inputs, title }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form className='newUserForm'>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="btn">
          <button className='save'>Save</button>  
          <button style={{backgroundColor:'green'}}>Reset</button>
          </div>
      </div>
    </div>
  );
  

  
}

export default ExamForm
