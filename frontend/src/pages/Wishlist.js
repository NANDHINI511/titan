import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/Wishslice';
import { FaHeart } from 'react-icons/fa';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const removeWishlistItem = (item) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <section>
      <div className="container">
        <h3 className="text-center my-5">MY WISHLIST</h3>
        <h6 className="text-center text-muted">Your favorite picks are here!</h6>

        <div className="row my-5">
          {wishlistItems.length === 0 ? (
            <div className="text-center">
              <p>Your wishlist is empty </p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
               <div className="card">
<img
  src={item.images || 'default-image.jpg'}
  onError={(e) => (e.target.src = 'default-image.jpg')}
  className="card-img-top"
  alt={item.title}
  height="250px"
/>

  <div className="card-body">
    <h6 className="card-title">{item.title}</h6>
    <p className="card-text text-success">
      ₹ {item.price}{' '}
      {item.discprice && (
        <span className="text-muted text-decoration-line-through ms-2">
          ₹ {item.discprice}
        </span>
      )}
    </p>
    <button
      className="btn btn-outline-danger w-100"
      onClick={() => removeWishlistItem(item)}
    >
      <FaHeart /> Remove from Wishlist
    </button>
  </div>
</div>

              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
