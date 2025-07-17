// import React from 'react'
import  './Women.css'
import '../component/Accordion.css'
import Accordion from '../component/Accordion'
import Logosection from '../component/Logosection'
import Filterbystrap from '../component/Filterbystrap'
import {womencaroarray, womenwatch,womencarosarr} from '../constant/Constant'
// import { useSelector } from 'react-redux'
import { addTocart, deleteFromcart } from '../redux/Cartslice';
import { useSelector,useDispatch } from 'react-redux';
import React, { useState,useEffect } from 'react';
import {FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToWishlist, removeFromWishlist } from "../redux/Wishslice";




const Women = () => {
  
  const[ProductItems,setProductsItems]=useState([]);
 useEffect(()=>{
      fetch(`http://localhost:7003/update`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  const cartitems=useSelector((state)=>state.cart.cartitems)
  const dispatch=useDispatch();
  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
  const deleteCart=(item)=>
  {
    dispatch(deleteFromcart(item))
  }

const wishlistItems = useSelector(state => state.wishlist.wishlistItems);


const toggleWishlist = (item, e) => {
  e.stopPropagation(); // <-- prevents event bubbling to the carousel
  const isItemInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);
  if (isItemInWishlist) {
    dispatch(removeFromWishlist(item));
  } else {
    dispatch(addToWishlist(item));
  }
};


  return (
   
   <>
<section>
  <div class="container-fluid main-content">
    <div class="row womentoprow">
    <Accordion/>
    <div class="col-lg-10">
                                             {/* -----carosalone--- */}
    <section>
    <div id="cardcarouselmen" class="carousel slide cs" data-bs-ride="carousel" data-bs-interval="800" >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0c7621ac/images/PLP_Banner/Titan_Apr_IciciOffer_D.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw56b0a6ab/images/PLP_Banner/PLP-Desktop-Men.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw80b3a130/images/PLP_Banner/PLP_Carousel_EMI_Banner_Desktop.png" alt="Third slide"/>
                </div>
             
                <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselmen" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselmen" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                </button>
              </div>
    </div>
    </section>
                                            {/* -------manybuttons--- */}
    <section>
            <div class="container">
            <div class=" row categorybtlinks ">
            <p>3,047 items |
            Analog Watches</p>
            <div className="categorylinks col-lg-10 mt-1 ">
              
                <a href="https://www.titan.co.in/shop/offers?lang=en_IN" class="category-links-button">Sale</a>
                <a href="https://www.titan.co.in/shop/bestsellers?lang=en_IN" class="category-links-button">Bestsellers</a>
                <a href="https://www.titan.co.in/shop/analog-watches?lang=en_IN" class="category-links-button">Analog Watches</a>
                <a href="https://www.titan.co.in/shop/smart?lang=en_IN" class="category-links-button">Smart Watches</a>
                <a href="https://www.titan.co.in/shop/new-arrivals?lang=en_IN&amp;srule=new-arrivals" class="category-links-button">New Arrivals</a>
                <a href="https://www.titan.co.in/shop/watches-for-men?lang=en_IN" class="category-links-button">men</a>
                <a href="https://www.titan.co.in/shop/watches-for-women?lang=en_IN" class="category-links-button">women</a>
            </div>
            <div class="col-lg-2 d-flex align-items-center">
                <span class="me-2">Compare</span>
                <label class="tiny-switch">
                  <input type="checkbox" id="toggleSwitch" />
                  <span class="tiny-slider"></span>
                </label>
            </div>
            </div>
            </div>
    </section>
                                            {/* ----You cld be interested in----- */}
    <section>
      <div class="row w-100 ucldbintrstd mt-4 mb-5">
        <h3 class="hdg mt-5 mb-4">You Could Be Interested In</h3>


{womenwatch.map((item)=>(
  <div className='col-lg-3' key={item.id}>
 <div class="card w-cards" >
          <img class="w-card-img" src={item.images} alt=" "/>
          <button type="button"
            onClick={(e) => toggleWishlist(item, e)}
            style={{
              background: 'none',
              border: 'none',
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10, // optional: keeps button above image
            }}
          >
            {wishlistItems.some((wishlistItem) => wishlistItem.id === item.id) ? (
              <FaHeart color="red" size={20} />
            ) : (
              <FaRegHeart color="grey" size={20} />
            )}
          </button>
            <div class="card-body">
            <h6 class="reviews">{item.rating}<i class='bx bxs-star' ></i></h6><span>{item.review}</span>
            <p class="cp-text">{item.title} &nbsp;|&nbsp;<span class="cardpara">Women's Watch<br/></span>{item.title2} </p>
             {/* Add to Cart button */}
             {
                                cartitems.find(Items=>Items.id===item.id)?
                                (<button class="btn btn-dark w-100 cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button class="btn btn-dark w-100 cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)


                              }

          </div>
        </div>
        </div>
))}

      </div>
     
    </section>
                                            {/* ----first carosal cards----- */}
    


<section>
 
                <div class="row ">
                      <h6 className="mt-4"></h6>
                      {womencarosarr.map((item) => (
                        <div className="col-lg-3 mb-4" key={item.id}>
                          <div className="card zooming">

                            <div id={`cardcarousel${item.id}`} className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-inner">

                                {item.images.map((img, imgIndex) => (
                                  <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${imgIndex + 1}`} />

                                  </div>
                                ))}
                              </div>

                              <button className="carousel-control-prev" type="button" data-bs-target={`#cardcarousel${item.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target={`#cardcarousel${item.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                              </button>
                            </div>

                            <div className="card-body">

                              {/* Optional rating */}
                              {item.rating && (
                                <div className="rating mb-2">
                                  <span>&nbsp; {item.rating} <i className='bx bxs-star'></i></span> ({item.reviews})
                                </div>
                              )}
                              <h5 className="card-title">{item.title}</h5>
                              <div>
                              <p className="card-text text-muted">{item.description}

                                <span className="crdspan text-success fw-bold">₹ {item.price}</span>
                                <span className=" crdspan text-muted text-decoration-line-through ms-2">₹ {item?.originalPrice}</span>
                                <span className=" crdspan text-danger ms-2">{item?.discount}</span></p>
                              </div>
                   <button type="button"
  onClick={(e) => toggleWishlist(item, e)}
  style={{
    background: 'none',
    border: 'none',
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10, // optional: keeps button above image
  }}
>
  {wishlistItems.some((wishlistItem) => wishlistItem.id === item.id) ? (
    <FaHeart color="red" size={20} />
  ) : (
    <FaRegHeart color="grey" size={20} />
  )}
</button>
                              {/* Add to Cart button */}
                              {
                                cartitems.find(Items=>Items.id===item.id)?(
                                <button class="btn btn-dark W-100 cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button class="btn btn-dark W-100 cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)


                              }
                             
                                
                            </div>
                          </div>
                        </div>
                      ))}          
                </div>
            </section>



                                            {/* ---------Recomnded-------- */}


    <section>
                <div class="row recommend">
                      <h6 className="mt-4">Recommended for you</h6>
                      {womencaroarray.map((item) => (
                        <div className="col-lg-3 mb-4" key={item.id}>
                          <div className="card">
                            <div id={`cardcarousel${item.id}`} className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-inner">
                                {item.images.map((img, imgIndex) => (
                                  <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${imgIndex + 1}`} />
                                  </div>
                                ))}
                              </div>

                              <button className="carousel-control-prev" type="button" data-bs-target={`#cardcarousel${item.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target={`#cardcarousel${item.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                              </button>
                            </div>

                            <div className="card-body">
                              {/* Optional rating */}
                              {item.rating && (
                                <div className="rating mb-2">
                                  <span>&nbsp; {item.rating} <i className='bx bxs-star'></i></span> ({item.reviews})
                                </div>
                              )}
                              <h5 className="card-title">{item.title}</h5>
                              <div>
                              <p className="card-text text-muted">{item.description}

                                <span className="crdspan text-success fw-bold">₹ {item.price}</span>
                                <span className=" crdspan text-muted text-decoration-line-through ms-2">₹ {item?.originalPrice}</span>
                                <span className=" crdspan text-danger ms-2">{item?.discount}</span></p>
                              </div>
                              {/* Add to Cart button */}
                              {
                                cartitems.find(Items=>Items.id===item.id)?(
                                <button class="btn btn-dark cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button class="btn btn-dark cartbutton "  onClick={()=>addCart(item)} > Add To Cart </button>)


                              }
                             
                                
                            </div>
                          </div>
                        </div>
                      ))}          
                </div>
            </section>

<section>
  <div className='row'>
  {ProductItems.map((item)=>(
  <div className='col-lg-3' key={item.id}>
 <div class="card w-cards" >
          <img class="w-card-img" src={item.img} alt=" "/>
          <button type="button"
            onClick={(e) => toggleWishlist(item, e)}
            style={{
              background: 'none',
              border: 'none',
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10, // optional: keeps button above image
            }}
          >
            {wishlistItems.some((wishlistItem) => wishlistItem.id === item.id) ? (
              <FaHeart color="red" size={20} />
            ) : (
              <FaRegHeart color="grey" size={20} />
            )}
          </button>
         
            <div class="card-body">
            <h6 class="reviews">{item.rating}<i class='bx bxs-star' ></i></h6><span>{item.review}</span>
            <p class="cp-text">{item.title} &nbsp;|&nbsp;<span class="cardpara">Women's Watch<br/></span>{item.title2} </p>
             {/* Add to Cart button */}
             {
                                cartitems.find(Items=>Items.id===item.id)?
                                (<button class="btn btn-dark w-100 cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button class="btn btn-dark w-100 cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)
                              }

          </div>
        </div>
        </div>
))}
</div>
</section>
                                           {/* --------logos--------- */}
      <Logosection/>
                                          {/* ----------filter by strap------ */}
                      <Filterbystrap/>
    </div>
</div>
  </div>
</section>
<section>
  <div class="container">
        <div class="row w-100 ms-2 me-2">
      <div class="col-12   mt-5 mb-4">
            <h3 class="w-parag mb-2">Watches for Women</h3>
            <p class="w-paragraph ">
            If you're on the lookout for trendy yet timeless accessories to amp up your daily looks, nothing can be better than a watch. A classic watch that resonates with your style can make you look  polished in the most effortless way. Women's watches have a unique way to uplift all kinds of outfits, making an elegant statement every day. But to make sure you get your hands on the best wrist watches for women, you must go for trusted brands that have made a name for themselves in the</p>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Women