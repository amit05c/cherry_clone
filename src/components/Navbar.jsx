import React from 'react'
import logo from "../assets/logo.svg"


const Navbar = (props) => {
    console.log(props)
  return (
    <div>
        <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} />
            <div className="location">
                <span className="city">{props.userInfo.city}</span>
                <span className="state">{props.userInfo.state},{" "}{props.userInfo.country}</span>
            </div>
            <div className="navbar-options">
                <div className="navbar-option">
                    <span className="material-icons"> person_outline</span> Sign In
                </div>
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                    <span className="material-icons">search</span> Search
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default Navbar