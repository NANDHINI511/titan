import './Men.css'
import '../component/Filterbystrap.css'
import '../component/Logosection.css'
import '../component/Accordion.css'
import Accordion from '../component/Accordion'
import Logosection from '../component/Logosection'
import Filterbystrap from '../component/Filterbystrap'
import {mencarosal} from '../constant/Constant'
import {watchearray} from '../constant/Constant'
import {watchearr} from '../constant/Constant'
import { addTocart, deleteFromcart } from '../redux/Cartslice'
import {useSelector,useDispatch} from "react-redux"
import {FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToWishlist, removeFromWishlist } from "../redux/Wishslice";







const Men = () => {



const cartitems=useSelector((state)=>state.cart.cartitems);
const dispatch=useDispatch();
const addCart=(item)=>{
  dispatch(addTocart(item))
  console.log("adding")
}
const deleteCart=(item)=>{ 
  console.log("hhii")
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
          {/* ----my sidebar---- */}
    <section>
      <div className="container-fluid">
        <div className="row w-100  mytoprow ">

                    <Accordion/>

          <div className="col-lg-10 myfullcol ms-0 ">
            {/* -----carosalone--- */}
            
            <div id="cardcarouselmen" className="carousel slide cs" data-bs-ride="carousel" data-bs-interval="800" >
            
              <div className="carousel-inner">
             {mencarosal.map((item, index) => (
  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>

                  <img className="d-block w-100" src={item.img} alt="First slide"/>
                </div>
                ))}
                
               
             
                <button className="carousel-control-prev" type="button" data-bs-target="#cardcarouselmen" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cardcarouselmen" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                </button>
              </div>
              
            </div>
            {/* -------manybuttons--- */}
            <section>
            <div className="container">
            <div className=" row categorybtlinks ">
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
            <div className="col-lg-2 d-flex align-items-center">
                <span className="me-2">Compare</span>
                <label className="tiny-switch">
                  <input type="checkbox" id="toggleSwitch" />
                  <span className="tiny-slider"></span>
                </label>
            </div>
            </div>
            </div>
            </section>
            {/* --------cardimages----- */}
            <section>
              <div className="container">
                  <div className="row">
                  <h6 className="mt-4">You could be interested in</h6>
                      {watchearray.map((item) => (
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
                                {/*  Add heart button here */}
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


                              {/* Optional rating */}
                              {item.rating && (
                                <div className="rating mb-2">
                                  <span>&nbsp; {item.rating} <i className='bx bxs-star'></i></span> ({item.reviews})
                                </div>
                              )}
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text text-muted">{item.description}</p>
                              <div>
                                <span className="text-success fw-bold">₹ {item.price}</span>
                                <span className="text-muted text-decoration-line-through ms-2">₹ {item.originalPrice}</span>
                                <span className="text-danger ms-2">{item.discount}</span>
                              </div>
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
              </div>
            </section>
           
            {/* full imGW */}
            <section>
              <div class="row stellar mt-2 me-2 mb-3">
                <div class="col-lg-12">
                <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwe4c17394/images/Category%20Banners/PLP-Coupon-Banner-dt2.jpg"/>
                </div>
              </div>
            </section>
            {/* -----recommend---- */}
            <section>
                <div className="row recommend">
                      <h6 className="mt-4">Recommended for you</h6>
                      {watchearr.map((item) => (
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
                                <span className=" crdspan text-muted text-decoration-line-through ms-2">₹ {item.originalPrice}</span>
                                <span className=" crdspan text-danger ms-2">{item.discount}</span></p>
                              </div>
                              {/* Add to Cart button */}
                              {
                                cartitems.find(Items=>Items.id===item.id)?(
                                <button class="btn btn-dark cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button class="btn btn-dark cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)


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


           

        {/* ---------login section----- */}
        <section>
                <div class="row loginimg w-100 mb-3">
                  <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw376a49fc/images/Category%20Banners/PLP-Login-Banner-dt.jpg" alt=""/>
                  <span class="textoverlogimg">Log In To Unlock Up To 10% Off*<br/> On Your First Purchase.</span>
                  <button className='menlogin'>LOGIN/SIGNUP</button>
                </div>
        </section>
      
          </div>
      
      </div>
      </div>
    
    </section>
   


    </>
  )
}

export default Men