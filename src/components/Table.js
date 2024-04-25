import React from 'react'
import "../css/table.css";
const Table = () => {
  return (
    <div className="cards2">
    <h1>Bestsellers</h1>
    <button className='button3'>More <img src="Vector3.png"/></button>
    
   
    <div class="table-container"> 
    <div className='column'>
    <ul>
        <li>Product</li>
        <li>Price</li>
        <li>Sold</li>
        <li>profit</li>
      </ul>
      </div>
    <table className='table'>
  <tbody>
    <tr>
      <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
    <tr>
    <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
    <tr>
    <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
    <tr>
    <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
    <tr>
    <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
    <tr>
    <td>Product</td>
      <td>₹235</td>
      <td>245</td>
      <td>87%</td>
    </tr>
  </tbody>
</table>
  </div>
  </div>
  )
}

export default Table