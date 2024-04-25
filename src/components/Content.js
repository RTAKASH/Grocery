import React from 'react'
import "../css/content.css"
const Content = () => {
  return (
    <div className='content'>
    <div className='header1'>
    <h1>Dashboard</h1>
    <button className='logout'>Logout</button>
    </div>
    <div className='cards'>
    <div className="card">
      <div className="card-content">
        <p>Total Revenue</p>
        <h1>₹23,453</h1>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
      <p>Profit Percentage</p>
        <h1>39.3%</h1>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
      <p>Conversion Rate</p>
        <h1>28%</h1>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
      <p>Average Order Value</p>
        <h1>₹200.4</h1>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Content