import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import './edit.css'


const Edit = () => {
  
    const{id}=useParams();
console.log("Editing product with id:", id);
    const [productsItems, setproductsItems] = useState({
  title: "",
  des: "",
  price: "",
  img: "",
  quantity: 1,
});


    useEffect(()=>{
     fetch(`http://localhost:7003/updatebyid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[id])

    const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const title= form.title.value;
    const des=form.des.value;
   
    const price=form.price.value;
    const img=form.img.value;
    const update={title,des,price,img,};
    console.log(update);

    fetch(`http://localhost:7003/allproductwatch/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/update";
        })
    } 
 
 return (
    <div className='editclass'>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
       <div class="update0">
           <label value="title"><b>TITLE</b></label>
           <input type="text" name="title" defaultValue= {productsItems.title || ''} className='ms-3'/>
       </div>
       <div class="update1">
           <label value="img"><b>IMAGE</b></label>
           <input type='text' name="img" defaultValue={productsItems.img || ''} className='ms-3'/>
           </div>
           
           <div class="update3">
           <label value="des"><b>DES</b></label>
           <input type='text' name="des" defaultValue={productsItems.des || ''}className='ms-3'/>
           </div>
           <div class="update4">
           <label value="price"><b>PRICE</b></label>
           <input type='number'name="price" defaultValue={productsItems.price || ''} className='ms-3'/>
       </div>
       <section className='update9'>
       
       <div class="update7 ms-3">
           <button type="submit" class="btn btn-primary">UPDATE</button>
           
       </div>
    </section>
   </form>
   </div>
   </div>
   </div>
  )
}


export default Edit