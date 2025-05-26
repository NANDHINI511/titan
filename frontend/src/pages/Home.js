import React from 'react'
import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import titan40yrs from "../images/Titan_40.webp"

import wedding from "../images/NA_Wedding_D.jpg"
import zoop from "../images/NA_Zoop_D.webp"
import memoi from "../images/Memoir_D.webp"
import crown from "../images/CrownCollection_D.jpg"
import ceramic from "../images/NA_ceramic_D-v1.webp"
import ragasilvr from "../images/RagaSilver_D.webp"
import fullimg from "../images/1805QM04_1.webp"
import fullimg1 from "../images/2606WM08_1.webp"
import discimg from "../images/discoverimg1.webp"
import discimg2 from "../images/Discover_Bold_D.webp"
import discimg3 from "../images/Discover_Couple_D.webp"
import discimg4 from "../images/Discover_Luxe_D.webp"
import discimg5 from "../images/Discover_Sporty_D.webp"
import { imagearray1, imagearray2 ,imagearray3,imagearray4,imagearray5,imagearray6,imagearray7,imagearray8} from '../constant/Constant';


const Home = () => {
  return (
    <>
            {/* -------location part-------- */}
    <section>
      <div className="location  ">
      <p className="text-center pt-2"><i class="bi bi-geo-alt"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>&nbsp;&nbsp;Select your pincode to check availability&nbsp;&nbsp;<i class='bx bx-arrow-back bx-rotate-180' ></i></p>
      </div>  
    </section>
  
            {/* ------------Carosal part---------- */}  

    <section>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" >
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3fa74063/images/homepage/All_Banners/NebulaMen_D.jpg" class="d-block w-100" alt="girl with bag"   />
        </div>
        <div class="carousel-item">
            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw721a873d/images/homepage/All_Banners/WW50_D.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3d297b5a/images/homepage/All_Banners/April_Raga2025_D.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw754b5288/images/homepage/All_Banners/Ti_Automatics_April2025_D.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw164a4548/images/homepage/All_Banners/Ti_smrt_60_d.jpg" class="d-block w-100" alt="..."/>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    </section>
            {/* -----------progress ul part---------- */}
    <section>
     <div className="progress-ul">
        <ul className="prog-ul d-flex col-lg-12">
            <li><a href="" >Sale</a></li>
            <li><a href="" >Raga</a></li>
            <li><a href="" >Automatics</a></li>
            <li><a href="" >Workwear</a></li>
            <li><a href="" >International</a></li>
            <li><a href="" >Smart</a></li>
            <li><a href="" >Nebula</a></li>
            <li><a href="" >Clocks</a></li>
        </ul>
    </div>   
    </section>
    <section>
        <div className="container mt-5 mb-5">
            <img src={titan40yrs} alt="titan40years" width="100%" height="200px" />
        </div>
    </section>
          {/* -------get starttd sticker---- */}
    <section>
    <div className="sticky-tab" >
    GET STARTED
  </div>
    </section>
    <section>
       <div class="container">
            <div class="row menwomen w-100 h-100 mt-2 mb-5">
              {imagearray7.map((item)=>(
              <div class="col-lg-6 col-md-6 " key={item.id}>
              <img src={item.img} width="100%" height="100%"/>
          </div>))}
            </div>
        </div>
    </section>
            {/* -----------second carosal--------- */}
    <section>
      <div class="container my-5">
        <div id="carouselExampleSlidesTwo" class="carousel slide" data-bs-ride="carousel" data-bs-interval="800">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw024161d8/images/BFLBanner_D.jpg" alt="Slide 1" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw7ad06575/images/homepage/All_Banners/Wallet_mobikwik_1202_d.png" alt="Slide 2" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesTwo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesTwo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
          {/* ---------Best way to buy product-------- */}
    <section >
    <div className="container c-img bg-white">
      <h2 className="text-center mt-2 mb-5">THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h2>

      <div className="row circle ">
      {imagearray5.map((item)=>(
   <div className=" round  " key={item.id}>
   <img src={item.img}width="160px" height="120px"   alt="watch9" /><div class="myspan"><span>{item.desc}</span></div>
 </div>
 ))}
      </div>
    </div>
    </section>
                      {/* ------Recommended for u ------- */}
    <section>
      <div className="container w-100 h-100 mb-3">
        <h2>Recommended for you</h2>
        <div className="row d-flex mt-5 ">
        {imagearray6.map((item)=>(
          <div className="card recomndcard" key={item.id} >
          <img className="card-img-top fullimg" src={item.img} alt="Card image cap"/>
        <div className="card-body">
        <a href="#" class="btn btn-dark mybtn ">{item.rate}<i class='bx bxs-star rate'></i>{item.review}</a>
        
        <p className="card-text">{item.title}&nbsp;|&nbsp;<span>{item.spantit}</span></p>
        <p className="rupees"><i class='bx bx-rupee'></i>{item.rs}&nbsp;<s><i class='bx bx-rupee'></i>{item.srs}</s><span class="sp">{item.off}</span></p>

        </div>
      </div> 
        ))}
       
        {/* <div className="card recomndcard" >
          <img className="card-img-top fullimg" src={item.img} alt="Card image cap"/>
        <div className="card-body">
        <a href="#" class="btn btn-dark mybtn "> 4.3<i class='bx bxs-star rate'></i>(529)</a>
        
        <p className="card-text">Titan&nbsp;|&nbsp;<span>Men's Watch</span></p>
        <p className="rupees"><i class='bx bx-rupee'></i>7,800&nbsp;<s><i class='bx bx-rupee'></i>9,580</s><span class="sp">12% OFF</span></p>

        </div>
      </div> &nbsp; */}
      {/* <div className="card recomndcard" >
        <img className="card-img-top fullimg" src={fullimg1} alt="Card image cap"/>
        <div className="card-body">
        <a href="#" class="btn btn-dark mybtn "> 4.3<i class='bx bxs-star rate'></i>(529)</a>
        
          <p className="card-text">Titan&nbsp;|&nbsp;<span>Men's Watch</span></p>
          <p className="rupees"><i class='bx bx-rupee'></i>7,800&nbsp;<s><i class='bx bx-rupee'></i>9,580</s><span class="sp">12% OFF</span></p>
        </div>
      </div> */}
        </div>
      </div>
    </section>
              {/* --------Third carosal new arrival------- */}
    <section >
    <div className="container carosal3 py-5">
      <h2 className="text-center mb-5">NEW ARRIVALS</h2>
      <div id="multiCarousel " class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="d-flex carodiv ">
              <div><img src={wedding} alt="" height="450px" width="350px"/></div>
              <div><img src={zoop} alt=""  height="450px" width="350px" /></div>
              <div><img src={memoi} alt=""  height="450px" width="350px" /></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex carodiv">
              <div><img src={crown} alt="" height="450px" width="350px"/></div>
              <div><img src={ceramic} alt=""height="450px" width="350px"/></div>
              <div><img src={ragasilvr} alt=""height="450px" width="350px"/></div>
            </div>
          </div> 
        </div>  
        <button class="carousel-control-prev1" type="button" data-bs-target="#multiCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon1" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next1" type="button" data-bs-target="#multiCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon1" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    </section>
                    {/* -----------Shop by brand--------- */}
    <section>
      <div className="container-fluid shopbybrnd mb-4">
      <h2 className="text-center pt-5 pb-3">SHOP BY BRAND</h2>
        <div className="row ms-2 me-2">
          {imagearray1.map((item)=>(
            <div className="col-lg-3 col-md-2" key={item.id}>
            <img src={item.img} alt="" width="280px" height="350px"/>
          </div>
          ))}

        </div>
        <div className="row mt-4 ms-2 me-2">
            {imagearray2.map((item)=>(
              <div className="col-lg-3 col-md-2" key={item.id}>
              <img src={item.img} alt="" width="280px" height="350px"/>
            </div>
            ))}
        </div>

      </div>
    </section>

                   {/* ---------Movement in tym-------- */}
    <section>
      <div className="container movmtintym mt-1">
        <h2 className="text-center">MOVEMENT IN TIME</h2>
        <div className="row mt-5  ">
                {imagearray3.map((item)=>(
          <div className=" col-lg-6  " key={item.id}>
          <img src={item.img}class="img-fluid "  alt="watch9" />
        </div>
        ))}

          <div className="col-lg-6 ">
            <div className="row w-100 h-100 ">
            {imagearray4.map((item)=>(
   <div className="col-6 "  key={item.id}>
   <img src={item.img}  alt="Watch 1" width="260px"height="253px" />
 </div>
))}
         
              </div>
          </div>
        </div>
      </div>
    </section>
                  {/* -------Discover your style------- */}
    <section>
      {/* ------Carousel swiper Section------ */}
      <div className="w-full max-w-screen-xl mx-auto ms-4 py-3">
      <h2 className="text-center mb-5">DISCOVER YOUR STYLE</h2>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination,Navigation,Autoplay]}
              className="mySwiper"
              navigation
              autoplay={{ delay:3000
                 }}
              loop={true}
            
            >
              
              {/* Add more SwiperSlides as needed */}

              <SwiperSlide >
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0b293ab5/images/homepage/All_Banners/Discover_Minimal_D.jpg"
                  alt="Mens Day Offer"
                  className="rounded-lg "
                  
                /> </SwiperSlide>
                <SwiperSlide >
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbf49db4e/images/homepage/All_Banners/Discover_Bold_D.jpg"
                  alt="Mens Day Offer"
                  className="rounded-lg "
                  
                /></SwiperSlide>
                <SwiperSlide>
                <img
                src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdae85b9d/images/homepage/All_Banners/Discover_Luxe_D.jpg"
                  alt="Mens Day Offer"
                  className="rounded-lg"
                  
                /></SwiperSlide>
             
              <SwiperSlide>
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw93f8affd/images/homepage/All_Banners/Discover_Couple_D.jpg"              alt="Wedding Offer"
                  className="rounded-lg "
                 
                /> </SwiperSlide>
                <SwiperSlide>
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw816cf69a/images/homepage/All_Banners/Discover_Sporty_D.jpg"              alt="Wedding Offer"
                  className="rounded-lg "
                 
                /></SwiperSlide>
                <SwiperSlide>
                <img
                src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdae85b9d/images/homepage/All_Banners/Discover_Luxe_D.jpg"
                  alt="Mens Day Offer"
                  className="rounded-lg"
                 
                />
              </SwiperSlide>
            </Swiper>
          </div>
    </section>
          {/* --------Collection----------- */}
    <section>
    

        <div className='container'>
           <h2 className="text-center mt-5 mb-5">COLLECTION</h2>
        <div className='row '>
           {imagearray8.map((item)=>(

          <div className="col-lg-3 col-md-6 " key={item.id}>
          <img src={item.img} width={250} height={400} /> 
          </div>
                 ))} 
            </div> 
        </div>
    </section>
              {/* -------logos section------ */}
    <section>
    <div className="container icon-section text-center">
    <div className="row">
      <div className="col-md-4">
        <i className="fas fa-award"></i>
        <p className="mt-2 mb-0 fw-bold">100% ORIGINAL</p>
      </div>
      <div className="col-md-4">
        <i className="fas fa-undo-alt"></i>
        <p className="mt-2 mb-0 fw-bold">7 DAY RETURN</p>
      </div>
      <div className="col-md-4">
        <i className="fas fa-truck"></i>
        <p className="mt-2 mb-0 fw-bold">FREE SHIPPING</p>
      </div>
    </div>
  </div>

  
  <div className="login-banner">
    <h2>LOGIN FOR THE BEST EXPERIENCE</h2>
    <button className="login-btn">LOGIN NOW</button>
    <a href="#" className="create-account">Create An Account</a>
  </div>

  
  <div className="chat-icon">
  <i className='bx bx-message'></i>
  </div>

    </section>

    </>
  )
}

export default Home