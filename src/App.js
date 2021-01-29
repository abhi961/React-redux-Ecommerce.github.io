import React  from 'react';

import Navbar from './component/Navbar';
import {Provider} from "react-redux";
import store from "./store/store";
import Cart from "./component/Cart";
import Home from "./component/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './component/Details';

 const App = () => {
 
      return (
         <>
            <div className="widget-area">
              <div className="phone-section">
                <h4><span className="phone-icon"><i class="fa fa-phone" aria-hidden="true">
                  </i></span>+91 1800 1800 1600</h4>
              </div>
                  <div className="address"><h4><span className="address-box"><i class="fa fa-map-marker" aria-hidden="true"></i></span>India</h4></div>
            </div>
            <BrowserRouter>
             <Provider store={store}> 
                <Navbar />
                <Route path="/" exact component={Home}></Route>
               <Route path="/Cart" exact component={Cart}></Route>
               <Route path="/details/:id" exact component={Details}></Route>
               </Provider> 
            </BrowserRouter>
           
      </>
      )
}
export default App;

