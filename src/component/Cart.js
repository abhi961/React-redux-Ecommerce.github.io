import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {BsDash, BsPlus } from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs";
const Cart = () => {
    const dispatch = useDispatch();
    const{products, totalPrice ,totalQty}=useSelector(state=> state.CartReducer);
    return (
        <>
            <div className="cart-container">
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                   <div className="cart-item">
                       <div className="cart_item_info">
                        <div className="Cart_heading">
                            <div className="cart-details">Picture</div>
                            <div className="cart-details">Name</div>
                            <div className="cart-details">Price</div>
                            <div className="cart-details">Inc/Dec</div>
                            <div className="cart-details">Remove</div>
                               <div className="cart_sumary">Summary</div>
                        </div>
                        {products.map(product=>(
                            <div className="cart_items" key={product.id}>
                                <div className="product__item">
                                <div className="cart_image">
                                    <img src={product.image} alt="product_img"/>
                                </div>
                                <div className="cart_item_name">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="cart_item_price">
                                    <h4><span className="currency_code">&#8377;</span>{product.price * product.Qty}</h4>
                                </div>
                                <div className="Cart-counter">
                                  <span className="dec_cart"onClick={()=> dispatch({type: 'DEC', payload: product.id})}><BsDash/></span>
                              <span className="qty-counter_cart">{product.Qty}</span>
                              <span className="inc_cart" onClick={()=> dispatch({type: 'INC' , payload: product.id})}><BsPlus/></span>
                              <span className="cart_remove" onClick={()=>dispatch({type: 'REMOVE' , payload:product.id})}><BsFillTrashFill/></span>
                          </div>
        
                             </div>
                               
                            </div>
                        ))}
                        <div className="sumary_container">
                            <div className="total_item">
                                Total Item:
                                <div className="Total_item">{totalQty}</div>
                            </div>
                            <div className="Total_item_price">Total-Price
                               <div className="total_item_price"><span className="currency_code">&#8377;</span>{totalPrice}</div>
                            </div>
                            <button className="check_out">Check Out</button>
                        </div>
                               
                       </div>
                      
                   </div>
                </> : <div className="cart_empty"><h4>Cart Is Cart Empty!!</h4></div>}
            </div>
        </>
    )
}

export default Cart;
