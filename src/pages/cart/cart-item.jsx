import React, { useContext } from 'react'
import './cart.css'
import {ShopContext} from '../../context/Shop-context';

const CartItem = (props) => {
    const{id,productName,price,productImages} = props.data;
    const {addToCart, cartItem, removeFromCart, updateCartItemCount} = useContext(ShopContext);//for item count in imputbox 


  return (
    <div className='cartItem'>
        <img src={productImages} alt="img" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
              <button onClick={()=>{removeFromCart(id)}}> - </button>
              <input className='countItem' value={cartItem[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
              <button onClick={()=>{addToCart(id)}}> + </button>

            </div>
        </div>
    </div>
  )
}

export default CartItem;
