import React from 'react'
import  './Smartwatch.css'
import '../component/Accordion.css'
import Accordion from '../component/Accordion'
import Logosection from '../component/Logosection'
import Filterbystrap from '../component/Filterbystrap'
import { womenwatch,watchearr } from '../constant/Constant'
import { addTocart, deleteFromcart } from '../redux/Cartslice'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'



const Smartwatch = () => {


  const cartitems=useSelector((state)=>state.cart.cartitems)
  const dispatch=useDispatch();
  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
  const deleteCart=(item)=>
  {
    dispatch(deleteFromcart(item))
  }


  return (
    <>
    <section>
    <div className="container-fluid">
    <div className="row smartwatch">
    <Accordion/>
    <div class="col-lg-10 mt-5">
        
        {/* ------ */}
    
    <section>
      
    <div id="cardcarouselsw" class="carousel slide cs mt-5 mb-2" data-bs-ride="carousel" data-bs-interval="800" >
      <div class="carousel-inner mt-3">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0c7621ac/images/PLP_Banner/Titan_Apr_IciciOffer_D.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw56b0a6ab/images/PLP_Banner/PLP-Desktop-Men.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100" src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw80b3a130/images/PLP_Banner/PLP_Carousel_EMI_Banner_Desktop.png" alt="Third slide"/>
                </div>
             
                <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                </button>
      </div>
    </div>
    </section>
    
            {/* ----many buttns---- */}
    <section>
            <div className="container">
            <div className=" row categorybtlinks ">
            
            <div className="categorylinks col-lg-10 mt-1 ">
              
                <Link to ="https://www.titan.co.in/shop/offers?lang=en_IN" className="category-links-button">Sale</Link>
                <Link to="https://www.titan.co.in/shop/bestsellers?lang=en_IN" className="category-links-button">Bestsellers</Link>
                <Link to="https://www.titan.co.in/shop/analog-watches?lang=en_IN" className="category-links-button">Analog Watches</Link>
                <Link to="https://www.titan.co.in/shop/smart?lang=en_IN" className="category-links-button">Smart Watches</Link>
                <Link to="https://www.titan.co.in/shop/new-arrivals?lang=en_IN&amp;srule=new-arrivals" className="category-links-button">New Arrivals</Link>
                <Link to="https://www.titan.co.in/shop/watches-for-men?lang=en_IN" className="category-links-button">Men</Link>
                <Link to="https://www.titan.co.in/shop/watches-for-women?lang=en_IN" className="category-links-button">Women</Link>
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
            {/* ----you cld b intersted--- */}
                                            {/* ----You cld be interested in----- */}
                                            <section>
      <div className="row w-100 ucldbintrstd mt-4 mb-5">
        <h3 className="hdg mt-5 mb-4">You Could Be Interested In</h3>


{womenwatch.map((item)=>(
  <div className='col-lg-3' key={item.id}>
 <div className="card w-cards" >
          <img className="w-card-img" src={item.images} alt=" "/>
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">{item.badge}</span>
          <i className="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div className="card-body">
            <h6 className="reviews">{item.rating}<i className='bx bxs-star' ></i></h6><span>{item.review}</span>
            <p className="cp-text">{item.title} &nbsp;|&nbsp;<span className="cardpara">Women's Watch<br/></span>{item.title2} </p>
             {/* Add to Cart button */}
             {
                                cartitems.find(Items=>Items.id===item.id)?
                                (<button className="btn btn-dark w-100 cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                :
                                (<button className="btn btn-dark w-100 cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)


                              }

          </div>
        </div>
        </div>
))}

      </div>
     
    </section>
    {/* <section>
    <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarouselsw1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarouselsw2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarouselsw3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarouselsw4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarouselsw5" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw5" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw5" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarouselsw6" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw6" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw6" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarouselsw7" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw7" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw7" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarouselsw8" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarouselsw8" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarouselsw8" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </section> */}
            {/* -----recommend---- */}
            <section>
                <div class="row recommend">
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
         
    <section>
    <Logosection/>
    </section> 
    {/* <section>
      <div class="row w-100 bestselr mt-4">
        <h3 class="hdg mt-5 mb-4">Best Seller</h3>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards">
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5487e70b/images/Titan/Catalog/2606WM08_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwed38bfc8/images/Titan/Catalog/2642WM01_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
      </div>
    </section>
    <section>
    <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </section> */}
    <section>
    <Filterbystrap/>
    </section>
    {/* <section>
    <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </section> */}
    {/* <section>
    <Filterbystrap/>
    </section> */}
    {/* <section>
        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa6d6cd5a/images/Category%20Banners/PLP-EMI-Banner-dt.jpg" alt="" width="100%" height="90px"/>
    </section> */}
    {/* <section>
      <div class="row w-100 bestselr mt-4">
        <h3 class="hdg mt-5 mb-4">Best Seller</h3>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5487e70b/images/Titan/Catalog/2606WM08_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwed38bfc8/images/Titan/Catalog/2642WM01_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
        <div class="col-lg-3 ">
        <div class="card w-cards" >
          <img class="w-card-img" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360" alt="Card image cap"/>
          <span class="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
          <i class="bx bx-heart wishlist position-absolute top-0 end-0 m-2"></i>
            <div class="card-body">
            <h6 class="reviews">4.5<i class='bx bxs-star' ></i></h6><span>(10)</span>
            <p class="cp-text">Titan Raga &nbsp;|&nbsp;<span class="cardpara">Womens watch<br/>Titan Raga Delights Quartz Analog</span> </p>
           
          </div>
        </div>
        </div>
      </div>
    </section>
    <section>
    <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel1" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img  class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                      <div class="rating"><span>&nbsp; 4.7 <i class='bx bxs-star' ></i></span> (103)</div>
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 4,135</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 7,550</span>
                          <span class="text-danger ms-2">20% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel2" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd6b3d508/images/Sonata/Catalog/87012PP01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw65631675/images/Sonata/Catalog/87012PP01_3.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3226f79e/images/Sonata/Catalog/87012PP01_4.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel2" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel2" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan Women's Watch</h5>
                        <p class="card-text text-muted">Stylish strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 3,234</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 5,668</span>
                          <span class="text-danger ms-2">11% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming ">
                      <div id="cardcarousel3" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7343c05/images/Titan/Catalog/2598YM01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1f455aaf/images/Titan/Catalog/2598YM01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0170890/images/Titan/Catalog/2598YM01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 1,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 3,550</span>
                          <span class="text-danger ms-2">12% off</span>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="col-lg-3">
                    <div class="card zooming">
                      <div id="cardcarousel4" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa7a5dd5/images/Fastrack/Catalog/9735NL01_1.jpg?sw=360&sh=360" alt="First slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b796648/images/Fastrack/Catalog/9735NL01_2.jpg?sw=360&sh=360" alt="Second slide"  />
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c73d938/images/Fastrack/Catalog/9735NL01_3.jpg?sw=360&sh=360" alt="Third slide"  />
                          </div>
                        </div>

                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardcarousel4" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardcarousel4" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">Titan  Women's Watch</h5>
                        <p class="card-text text-muted">Stylish brown leather strap with a modern dial.</p>
                        <div>
                          <span class="text-success fw-bold">₹ 2,995</span>
                          <span class="text-muted text-decoration-line-through ms-2">₹ 4,550</span>
                          <span class="text-danger ms-2">10% off</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </section> */}
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Smartwatch