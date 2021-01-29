import React, {useEffect ,useState}  from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {BsDash, BsPlus } from "react-icons/bs";
const Details = () => {
    const [Qty, setQty] = useState(1);
    const {id}= useParams()
    const dispatch = useDispatch();
    const {product}= useSelector(state=> state.ProductsReducer)
    console.log(product);
     useEffect(() => {
       dispatch({type: 'PRODUCT', id})
     },[id])
     const qtyhandler= ()=>{
         setQty(Qty+1);

     }
     const decQty = ()=> {
         if(Qty > 1){
             setQty(Qty-1);
         }
     }
    return (
        <>
        <div className="back-container">
              <div className="back-btn">
                  <Link to="/"><h4>Back To Result</h4></Link>
              </div>
              <div className="details-info">
                  <div className="info-container">
                      <div className="info-img">
                          <img src={product.image} alt="product-img" />
                      </div>
                      <div className="info-name">
                          <h3>{product.name}</h3>
                      <div className="info-brand">
                          <h4>{product.brand}</h4>
                      </div>
                        <div className="info-price">
                         <h4><span className="currency_code">&#8377;</span>{product.price}</h4>
                      </div>
                      </div>
                      <div className="info-desc">
                           <div className="deails-head">
                               <h3>Details</h3>
                           </div>
                          <p>{product.desc}</p>
                          <button className="btn_to_cart" onClick={()=> dispatch({type:'ADD_TO_CART', 
                                  payload:{product, Qty}})}>Add To Cart</button>
                          <div className="Quantity-info">
                                  <span className="dec" onClick={decQty}><BsDash/></span>
                              <span className="qty-counter">{Qty}</span>
                              <span className="inc" onClick={qtyhandler}><BsPlus/></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
        </div>
          
        </>
    )
}

export default Details;
