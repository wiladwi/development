import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import Modal from './component/Modal';

function App() {
  return (

    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
           <Route  component={Default} />
        </Switch>
        <Modal/>
        {/* <ProductList/>
        <Details/>
        <Cart/>
        <Default/> */}

    </React.Fragment>



 
    // <div className="container">
    //   <div className="row">
    //     <div className="col-6">
    //       Coloumn1
    //     </div>
    //     <div className="col-6">
    //       <span>
    //         <i className="fas fa-home">

    //         </i>
    //       </span>
    //     </div>

    //   </div>

    // </div>
    
  );
}

export default App;
