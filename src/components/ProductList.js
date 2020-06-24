import React, {Component} from "react"
import Product from "./Product"
import Title from "./Title"
class ProductList extends Component {
  state = {
    product: [],
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList