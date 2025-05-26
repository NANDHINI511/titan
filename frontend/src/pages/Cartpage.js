import React from 'react'
import './Cartpage.css'
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromcart, updateQuantity } from '../redux/Cartslice';
// import { useSelector,useDispatch } from 'react-redux';
// import { deleteFromcart, updateQuantity } from '../redux/Cartslice';
// import { addToWishlist, removeFromWishlist } from '../redux/Wishlistslice';
// import { BsCartX } from "react-icons/bs";




const Cartpage = () => {

 const cartitems=useSelector((state)=>state.cart.cartitems)
 const dispatch=useDispatch();

 const deleteCart=(item)=>{
    dispatch(deleteFromcart(item))

 }
 const incrementCart=(id,quantity)=>{
    dispatch(updateQuantity({id,quantity:quantity+1}))
 }
const decrementCart=(id,quantity)=>{
    if(quantity>1)
    {
        dispatch(updateQuantity({id,quantity:quantity-1})) 
    }
}
  return (
   <>
<section>
    <div className="container ">
        {/* <div className='row'> */}
            <h3 className='text-center bg-danger cartpg'>CART PRODUCTS ARE</h3>
            <h6 className='BestSellerDes'>Grab our best products to brighten your day</h6>            
        <div class="container text-center" >
          <div class="row my-5 ">
            {
                cartitems.map((item)=>{
                    return(
                        <div className="col-lg-3" key={item.id}>
                        <div className="card crd-img" >
                          <img src={item?.images} className="card-img-top" alt="..."/>
                          <div className="card-body" >
                            <h6 className="card-text">{item.title}</h6>
                            <p className="card-text text-muted">{item.description}</p>
                            <p className="card-text text-success ">₹ {item.price}
                            <span className='card-text text-muted text-decoration-line-through ms-2' >₹ {item.originalPrice}</span>
                            </p> 


                            <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                                <button className="btn buttons " style={{padding:'6px'}} onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
                                <button className="btn buttons " >{item.quantity}</button>
                                 <button className="btn buttons" style={{padding:'5px'}} onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button>
                            
                     
 
                            <button className="btn  buttons" onClick={()=>deleteCart(item)} > Delete </button>
                            </div>   
                          </div>            
                       
                        </div>
                      </div>
                    )
                })
            }

        </div>
        </div>
        </div>
    {/* </div> */}
</section>

   </>
  )
}

export default Cartpage