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
        cartTotal : 0,
        plusCart : 0,
        minCart : 0
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
            console.log('ini ID : ${id}');
            let tempProduks =[...this.state.produkku];
            const indek = tempProduks.indexOf(this.getItem(id));
            const produk=tempProduks[indek];
            produk.inCart=true;
            produk.count=1;
            const price=produk.price;
            produk.total=price;
            //console.log([...this.state.cart,produk,tempProduks]);
            this.setState(()=>{
                return {
                    produkku:tempProduks,
                    cart : [...this.state.cart, produk]
                };
                
                
            },
                ()=>{
                    this.addTotals();
                
                }
               


            )
            
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
          //  console.log('increase log');
            let tempCart = [...this.state.cart];
            const selectedProduk = tempCart.find(item=>item.id===id) ;
            const index = tempCart.indexOf(selectedProduk);
            const produk = tempCart[index];
            produk.count = produk.count+1;
            produk.total = produk.count * produk.price; 

            this.setState(()=>
            {
                return {
                    cart : [...tempCart]
                }

            },
            ()=>{
                this.addTotals();
            }
            
            );

            
        }

        decrease = id => {
            //console.log('deacrease  log');
            let tempCart = [...this.state.cart];
            const selectedProduk = tempCart.find(item=>item.id===id) ;
            const index = tempCart.indexOf(selectedProduk);
            const produk = tempCart[index];
            produk.count = produk.count-1;
            if(produk.count===0){
                this.removeItem(id);
                
            }else {
                produk.total = produk.count * produk.price; 
                this.setState(()=>
                {
                    return {
                        cart : [...tempCart]
                    }

                },
                ()=>{
                    this.addTotals();
                }
                
                );
            }
        } 

        removeItem = id => {
            console.log('remove item log');
            let tempProduk = [...this.state.produkku];
            let tempCart = [...this.state.cart];
            
            tempCart = tempCart.filter(item=>item.id !== id); // unruk mendapat ID barang yg tidak dipilih

            const index = tempProduk.indexOf(this.getItem(id));     // unruk mendapat ID barang yg  dipilih
            let removeProduk = tempProduk[index];
            removeProduk.inCart = false;
            removeProduk.count = 0;
            removeProduk.total = 0;

            this.setState(()=>{
                return{
                    cart :[...tempCart],
                    produkku : [...tempProduk]
                };
                
            },()=> {
                this.addTotals();
            }

            )
        }

        clearCart =()=>{
            this.setState(()=>{
                return {
                         cart :[]
                };

              },()=>{
                this.setProdukku();
                this.addTotals()
               }
            );
        }

        addTotals =()=>{
            console.log('add total');
            let subtotal= 0;
            this.state.cart.map(item=>(subtotal+=item.total));
            const tempTax =subtotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));                        
            const total = subtotal + tax;
            this.setState(()=>{
                return {
                    cartSubtotal : subtotal,
                    cartTax : tax,
                    cartTotal : total
                }
            });
        }

        refCode = ()=>{
            console.log('Menambah Referral Code');

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
                 decrease : this.decrease,
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