import React, {Component} from "react"
import Product from "./Product"
import Title from "./Title"
import {storeProduct} from "../data"
import {ProductConsumer} from "../context"

class ProductList extends Component {
  state = {
    products: storeProduct,
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value)
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList
