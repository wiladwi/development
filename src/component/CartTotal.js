import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default function CartColumns({value}) {
        const {cartSubtotal, cartTax, cartTotal, clearCart}=value;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase bm-3 px-5" type="button" onClick={()=>clearCart()}>
                                    clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-left" >sub total : </span>
                                <strong className="text-right">Rp. {cartSubtotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-left">tax : </span>
                                <strong className="text-right">Rp. {cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-left">total : </span>
                                <strong className="text-right">Rp. {cartTotal}</strong>
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
};