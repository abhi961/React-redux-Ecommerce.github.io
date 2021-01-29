import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Home = () => {
    const {products} = useSelector(state=> state.ProductsReducer);
     console.log(products);
    return (
        <>
          <div className="product-head">
              <h1>Products</h1>
              <div className="product-container">
                  <div className="product-box">
                      {products.map((product)=>
                        <ul>
                            <li>
                                <div className="products" key={product.key}>
                                    <div className="product-image">
                                      <Link to={`/details/${product.id}`}><img src={product.image} alt="product"/>
                                      </Link></div>
                                        <Link to={`/details/${product.id}`}><div className="product-name"><h3>{product.name}</h3></div></Link>
                                    <div className="product-brand"><h3>{product.brand}</h3></div>
                                    <div className="product-price"><h3><span className="currency_code">&#8377;</span>{product.price}</h3></div>
                                </div>
                            </li>
                        </ul>
                      )}
                  </div>
              </div>
          </div>
        </>
    )
}

export default Home;
