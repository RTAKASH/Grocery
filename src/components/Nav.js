import React from 'react'
import "../css/nav.css"
const Nav = () => {
  return (
    <div className='Nav'>
        <h1>A Kasera Company</h1>
     <ul className='list'>
        <li><button className='button1'><img src="histogram.png"/>Overview</button></li>
        <li><button className='button1'><img src="vector.png"/>Products</button></li>
        <li><button className='button1'><img src="vector2.png"/>Orders</button></li>
        <li><button className='button1'><img src="user.png"/>Users</button></li>
        <li><button className='button1'><img src="portrait.png"/>Drivers</button></li>
        <li><button className='button1'><img src="document.png"/>Reports</button></li>
     </ul>
    </div>
  )
}

export default Nav