// redux/Wishslice.js
import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const savedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

const wishSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: savedWishlist
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlistItems.find(item => item.id === action.payload.id);
      if (!exists) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        item => item.id !== action.payload.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishSlice.actions;
export default wishSlice.reducer;
