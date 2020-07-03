import React, { Component } from 'react';
import {ProductCosumer, ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './ButtonStyle';
import { detailProduct } from '../data';

class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const{id,company,img,info,price,title,inCart}=value.detailProduk;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} className="img-fluid" alt="Product"/>

                                </div>
                                <div className="col-10 max-auto text-center text-slanted text-capitalize text-blue my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                    <h4 className="text-title text-uppercase   text-muted mt-3 mb-2"> made by :
                                        <span className="text-uppercase">
                                            {company}

                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong> Price : <span>Rp.</span>{price}</strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> Some info about product : </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer className="mr-2 text-blue">Back to Product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            disabled={inCart?true:false}
                                            onClick={ ()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}    
                                            
                                        >
                                      
                                             {inCart?"In Cart":"Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Detail;