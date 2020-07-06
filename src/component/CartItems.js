import React, { Component } from 'react';

export default function CartItems({item,value}) {
    const {id,title,img, price, total, count}=item;
    const {increase,decrease,removeItem} =value;
    return(
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img}
                    style={{width:"5rem", height:"5rem"}}
                    className="img-fluide"
                    alt="product"
                />

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">total : </span>
                {total}
            </div>

        </div>

    );
};