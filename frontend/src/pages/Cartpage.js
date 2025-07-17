import React from 'react'
import './Cartpage.css'
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromcart,addTocart, updateQuantity } from '../redux/Cartslice';


const Cartpage = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromcart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };


  // ⏬ Calculation Section
  const totalItems = cartitems.reduce((acc, item) => acc + item.quantity, 0);
  const totalOriginalPrice = cartitems.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalDiscountPrice = cartitems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = totalOriginalPrice - totalDiscountPrice;
  const gst = Math.round(totalDiscountPrice * 0.18); // 18% GST
  const finalTotal = totalDiscountPrice + gst;

  return (
    <>
      <section className="py-4 main-content4">
        <div className="container">
          <h3 className="text-center bg-danger text-white cartpg p-2">CART PRODUCTS</h3>
          <h6 className="BestSellerDes text-center mb-4">Grab our best products to brighten your day</h6>

          <div className="row">
            {/* Left Side: Cart Items */}
            <div className="col-lg-9">
              <div className="row">
                {cartitems.map((item) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
                    <div className="card h-100 crd-img">
                      <img src={item?.images} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h6 className="card-text">{item.title}</h6>
                        <p className="card-text text-muted">{item.description}</p>
                        <p className="card-text text-success">
                          ₹ {item.price}
                          <span className="text-muted text-decoration-line-through ms-2">₹ {item.originalPrice}</span>
                        </p>

                        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                          <button className="btn buttons " onClick={() => decrementCart(item.id, item.quantity)}>-</button>
                          <button className="btn buttons">{item.quantity}</button>
                          <button className="btn buttons " onClick={() => incrementCart(item.id, item.quantity)}>+</button>
                        </div>

                        <div className="text-center">
                          <button className="btn btn-danger btn-sm" onClick={() => deleteCart(item)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="col-lg-3">
              <div className="card p-3 shadow-sm bg-light sticky-top" style={{ top: '90px' }}>
                <h5 className="mb-3">Order Summary</h5>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total Items</span>
                    <strong>{totalItems}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Original Price</span>
                    <span>₹{totalOriginalPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between text-success">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between text-info">
                    <span>GST (18%)</span>
                    <span>₹{gst}</span>
                  </li>
                </ul>
                <h5 className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </h5>

                <div className="mt-3">
                  <button className="btn btn-warning w-100">Proceed to Checkout</button>
                </div>

                <div className="mt-2 text-muted" style={{ fontSize: '12px' }}>
                  🎟️ Coupon available: Use <strong>NEWUSER10</strong> to save more!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cartpage;

