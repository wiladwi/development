import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';


const ProductContext=React.createContext(); // agar bisa mengakses satu state kebanyak halaman/lain 
class ProductProvider extends Component {
    state={
       // produkku:storeProducts,
        produkku :[],
        detailProduk:detailProduct
    }
    componentDidMount(){
        this.setProdukku();
    }

    setProdukku = () =>{
        let tempProduk=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
           // console.log(singleItem);
            tempProduk=[...tempProduk,singleItem];
           // console.log(tempProduk);
        });
        this.setState(()=>{
            return {produkku:tempProduk};
        });
    }
    getItem= id =>{
        const produk = this.state.produkku.find(item=> item.id === id);
        console.log(produk);
        return produk;
    }


    handleDetail= id =>{
        //console.log('hello detail');
        const produk=this.getItem(id);
        this.setState(()=>{
            return {detailProduk:produk};
        });

    } 
    addToCart = id =>{
        console.log('ini ID : ${id}');
    }
    render() {
        return (
            //<ProductContext.Provider value="Hello Context" >
            <ProductContext.Provider value={{...this.state, nilaHandleDetail:this.handleDatail, nilaiAddToCart:this.addToCart}}> 
                {this.props.children}
            </ProductContext.Provider>
               
           // </ProductContext.Provider>
        );
    }
}
const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};