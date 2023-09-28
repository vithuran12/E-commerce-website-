//to access all data from anywhere
import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Product';

//to access and modify the data in anywhere in project no need to pass props(shop,cart)
export const ShopContext = createContext(null);

//id =i that declared in product list
const getDefaultCart=()=>{
    let cart={};
    for(let i = 1; i <= PRODUCTS.length; i++) {
        cart[i]=0;
    }
    return cart;
}

/* default value of cartitem
{ 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}
    1: 0, // Product A with ID 1 and initial quantity 0
    2: 0, // Product B with ID 2 and initial quantity 0
    3: 0, // Product C with ID 3 and initial quantity 0
   */

//cartItem[id] is 100 => is 

const ShopContextProvider = (props) => {

    const[cartItem,setCartItem]=useState(getDefaultCart());

const getTotalCartAmount=()=>{
    for(const item in cartItem){
        if(cartItem[item] > 0){
            
        }
    }
}

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId] : prev[itemId] + 1}))
    }//previous item id changed to be id+1(like add 100 iphone in cart)

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }

    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]: newAmount}))
    }//to update item count by text input

    const contextValue={cartItem, addToCart, removeFromCart, updateCartItemCount}

    //console.log(cartItem);

  return (
    <ShopContext.Provider value={contextValue} >
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

