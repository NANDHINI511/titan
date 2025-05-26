import {createSlice} from "@reduxjs/toolkit"



const storedItems=localStorage.getItem('cartItems')
const initialState={
    cartitems:storedItems?JSON.parse(storedItems):[],
}

const CartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
        addTocart:(state,action)=>{
            const newItem=action.payload;
            console.log("newItem",newItem)
            const existItem=state.cartitems.find(item=>item.id===newItem.id)

            if(existItem){
                existItem.quantity +=newItem.quantity;
            }else{
                state.cartitems.push(
                    {
                    id:newItem.id,
                    title:newItem.title,
                    images:newItem.images,
                    description:newItem.desc,
                    price:newItem.price,
                    originalPrice:newItem.originalPrice,
                    quantity:newItem.quantity,
                    }
                )
                localStorage.setItem('cartItems',JSON.stringify(state.cartitems))
            }

        },
        deleteFromcart:(state,action)=>{
            state.cartitems=state.cartitems.filter(Items=>Items.id!== action.payload.id )
            localStorage.setItem('cartItems',JSON.stringify(state.cartitems))

        },
        updateQuantity:(state,action)=>{
            const{id,quantity}=action.payload;
            const itemToUpdate=state.cartitems.find(Item=>Item.id===id);

            if(itemToUpdate)
            {
                itemToUpdate.quantity=quantity;
                localStorage.setItem("cartItems",JSON.stringify(state.cartitems));
            }
        }
        }
    }  
)
export default CartSlice.reducer;
export const {addTocart,deleteFromcart,updateQuantity}=CartSlice.actions;