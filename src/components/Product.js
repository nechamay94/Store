import React, {Component} from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"

class Product extends Component {
  render() {
    const {id,title,img,price,inCart} = this.props.product;
    return(
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5"
          onClick={() => console.log('u clicd')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button className="cart-btn" 
            onClick={() => 
            console.log('add to the cart')
            }/>
            <div className="card-footer d-flex
            justify-content-between">
              <p className="align=self-center mb-0">
                {title}
              </p>
            </div>

            </div>

 
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`

`
   /*{
    const {id, title, img, price, inCart} = this.props.product
    return (
      <div className="col-9 mx-auto col-md-6 
      col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={
            console.log(' u click on me')
          }>
            <Link to="/details">
              <img src={img} alt="product" 
              className="card-img-top"/>
            </Link>
          </div>
        </div>
      </div>*/
    

export default Product
