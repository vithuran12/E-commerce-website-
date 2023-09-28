import React, { useContext } from 'react'
import './shop.css'
import {ShopContext} from '../../context/Shop-context'


const Product = (props) => {

    const{id,productName,price,productImages} = props.data;
    const {addToCart, cartItem} = useContext(ShopContext);

    const cartItemAmount = cartItem[id]
  return (
    <div className='product'>
        <img src={productImages} alt="img" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>     {/* item id inka irunthu pokum after athukketa product la click panna 'shop-context' la id ku etra item oda count increase aakum */}
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}     {/* like if statement , && is then */}
        </button>

    </div>

)
}

export default Product
