import React from 'react'
import './Logosection.css'

const Logosection = () => {
  return (
    <>
     <section>
            <div className="row icons-sect-men mt-3">
                  <div className="col-lg-3">
                  <i class='bx bx-award' ></i>
                    <p className="mt-2 mb-0 fw-bold">100% ORIGINAL</p>
                  </div>
                  <div className="col-lg-3">
                  <i class='bx bx-undo'></i>
                    <p className="mt-2 mb-0 fw-bold">7 DAY RETURN</p>
                  </div>
                  <div className="col-lg-3">
                  <i class='bx bxs-truck'></i>
                    <p className="mt-2 mb-0 fw-bold">FREE SHIPPING</p>
                  </div>
                  <div className="col-lg-3">
                  <i class='bx bx-collection'></i>
                    <p className="mt-2 mb-0 fw-bold">PAY ON DELIVERY</p>
                  </div>
            </div>
            </section>
    </>
  )
}

export default Logosection