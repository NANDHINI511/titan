import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from 'react'
import './Update.css'



const Updatewomen = () => {

  const[ProductItems,setProductsItems]=useState([]);
 useEffect(()=>{
      fetch(`http://localhost:7003/updatewomen`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`http://localhost:7003/deletewomen/${id}`,{
      method:"DELETE",})
      .then((res)=>res.json())
      .then((data)=>{
          toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
}


  return (
//  <div className="update-page">
  <div className="card table2 mb-5">
    <div className="card-body">
      <table className="table1 ">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>IMAGE</th>
            <th>DES</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody> 
          {ProductItems?.map((Item) => (
            <tr key={Item._id}>
              <td>{Item.title}</td>
              <td><img src={Item.img} alt='' /></td>
              <td>{Item.des}</td>
              <td>{Item.price}</td>
              <td>{Item.quantity}</td>
              <td>
                <button className='table3' onClick={() => DeleteItems(Item._id)}>delete</button>
                <Link to={`/editwomen/${Item._id}`}><button><FiEdit /></button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
// </div>

  )
}

export default Updatewomen