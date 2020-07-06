import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';


const ProductContext=React.createContext(); // agar bisa mengakses satu state kebanyak halaman/lain 
class ProductProvider extends Component {
    state={
       // produkku:storeProducts,
        produkku : [],
        detailProduk : detailProduct,
        cart : [],
        modalOpen : false,
        modalProduk : detailProduct,
        cartSubtotal : 0,
        cartTax : 0,
        cartTotal : 0
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
        //  console.log(produk);
            return produk;
        }


        handleDetail= id =>{
            //console.log('hello detail');
            const produk=this.getItem(id);
            //console.log(produk);
            this.setState(()=>{
                return {detailProduk:produk};
            });

        } 
    

        addToCart = id =>{
            //console.log('ini ID : ${id}');
            let tempProduks =[...this.state.produkku];
            const indek = tempProduks.indexOf(this.getItem(id));
            const produk=tempProduks[indek];
            produk.inCart=true;
            produk.count=1;
            const price=produk.price;
            produk.total=price;
            this.setState(()=>{
                return {
                    produkku:tempProduks,
                    cart : [...this.state.cart, produk]
                };
            });
        }


        openModal = id =>{
            const produk= this.getItem(id);
            this.setState(()=>{
                return {
                    modalProduk : produk,
                    modalOpen : true


                }

            });

        }

        closeModal = id =>{
            this.setState(()=>
            {
                return {
                    modalOpen:false
                }

            });
        }

        increase = id => {
            console.log('increase log');
        }

        decrease = id => {
            console.log('deacrease  log');
        } 

        removeItem = id => {
            console.log('remove item log');
        }

        clearCart =()=>{
            console.log('remove item log');
        }

    render() {
        return (
            //<ProductContext.Provider value="Hello Context" >
            <ProductContext.Provider value={
                {...this.state,
                 handleDetail:this.handleDetail,
                 addToCart:this.addToCart, 
                 openModal: this.openModal, 
                 closeModal : this.closeModal,
                 increase : this.increase,
                 detailProduct : this.decrease,
                 removeItem : this.removeItem,
                 clearCart : this.clearCart
                 }}>

                {this.props.children}
            </ProductContext.Provider>
               
           // </ProductContext.Provider>
        );
    }
}
const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};