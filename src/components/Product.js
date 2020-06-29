import React, {Component} from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"

class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
      <div>
        <h3>hello from prudact</h3>
      </div>
    )
  }
}

export default Product
