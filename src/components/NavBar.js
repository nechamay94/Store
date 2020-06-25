import React, {Component} from "react"
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar -expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <h3>HOME</h3>
        </Link>

        <ul className="navbar-nav align-items-center">
          <il className="nav-item ml-5">
            <Link to="/" className="nav-link">
              product
            </Link>
          </il>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <h3>CART</h3>
          </ButtonContainer>
        </Link>
      </nav>
    )
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
`

export default NavBar
