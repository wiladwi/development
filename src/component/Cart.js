import React, { Component } from 'react';
import Title from './Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Referall from './Referall';


class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   { value => {
                       const {cart} = value;
                       
                       if(cart.length>0){
                           return(
                           
                               <React.Fragment>
                                     {console.log('Lewat')}
                                    <Title namaku="your" titleku="cart" />
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                    <Referall/>


                               </React.Fragment>
                           );
                       }else {
                           return(
                             <EmptyCart/>
                            );
                           
                       }
                   }}
               </ProductConsumer>
           
            
                

           </section>
        );
    }
}

export default Cart;