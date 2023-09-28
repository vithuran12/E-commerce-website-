import React, { useContext } from 'react';
import {PRODUCTS}  from '../../Product';
import {ShopContext} from '../../context/Shop-context';
import CartItem from './cart-item'
import './cart.css';
import { Link } from 'react-router-dom'; 


const Cart = () => {
  const {cartItem} =useContext(ShopContext)

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product)=>{
            if(cartItem[product.id] !== 0){
              return <CartItem data={product} />
            }
        })}
      </div>
      <p>Subtotel : $</p>

        <div className="checkout">

          <Link to={'/shop'}>
          <button className='ContinueShopping'> Continue Shopping</button>
          </Link>

          <button className='Checkout'>Checkout</button>
        </div>

    </div>
  )
}

export default Cart;
