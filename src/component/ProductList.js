import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context'; 

class ProductList extends Component {
    state={
        produkku:storeProducts
    }
    render() {
       // console.log(this.state.produkku); ini untuk mengetes dari data js
        return (
            <React.Fragment>

                <div className="py-5">
                    <div className="container">
                        <Title namaku="Aspenku" titleku=" Fresh Food"/>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    //return <h1>{value}</h1>;
                                    //console.log(value);
                                    return value.produkku.map(produk=>{
                                       return <Product key={produk.id} produk={produk} /> 
                                    });
                                }}
                            </ProductConsumer>
                        </div>


                    </div>
                </div>
            </React.Fragment>

            // <div>
               
            //     <Product/>
            // </div>
        );
    }
}

export default ProductList;