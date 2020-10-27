import { Remove } from '@material-ui/icons';
import React, { Component } from 'react'

export default class Products extends Component {
    convertMoney=(price)=>{
        return window.web3.utils.fromWei(price.toString(),"Ether")
    }
    renderBuyButton=(item)=>{
        if(!item.purchased){
            return (
              <button
              style={{width:"100%"}}
                name={item.id}
                value={item.price}
                onClick={(event) => {
                  this.props.purchaseProduct(
                    event.target.name,
                    event.target.value
                  );
                }}
                className="btn btn-primary"
              >
                Buy
              </button>
            );
        }
    }

    renderProductBox=()=>{
        if(this.props.products){
            return this.props.products.map((item,index)=>{
                return (
                  <div
                    // key={index}
                    className="col-lg-4 product-box"
                    style={{ height: "45vh", padding: "10px" }}
                  >
                    <div className="product-img" style={{ height: "70%",
                    backgroundImage:"url(https://i.pinimg.com/originals/19/36/bd/1936bdd2d500028a5c1113e5ed90b732.jpg)" }}>                      
                    </div>
                    <div
                      className="product-detail text-center"
                      style={{ height: "30%" }}
                    >
                      <div className="product-id" style={{ opacity: 0}}>{item.id.toString()}</div>
                      <div className="product-name">{item.name}</div>
                      <div className="product-price">
                         {this.convertMoney(item.price)} Eth
                      </div>
                      <div className="product-owner">{item.owner}</div>
                        {this.renderBuyButton(item)}
                    </div>
                  </div>
                );
            })
            
        }else{
            return (<div></div>)
        }
    }
    render() {
        return (
          <div className="my-2">
            <h1>Product</h1>
            <div className="container">
                <div className="row">
                    {this.renderProductBox()}
                </div>
            </div>
          </div>
        );
    }
}
