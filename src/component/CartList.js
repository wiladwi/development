import React, { Component } from 'react';
import CartItems from './CartItems';

export default function CartList({value}) {
    const {cart} =value;
    return(

        <div>
          
            {cart.map(item => {
                
               return <CartItems key={item.id} item={item} value={value}/>;
            })}
           
            
        </div>
    );
};
