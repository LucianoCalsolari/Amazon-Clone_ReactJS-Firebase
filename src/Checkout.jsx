import React from 'react'
import "./Checkout.css"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/32/br-books/2020/September/BoxFriday/1500x150_gridnarrow.jpg" alt=""/>

                <div className="checkout__title">
                    <h1>Voce nao comprou nada ainda :(</h1>
                </div>
            </div>
        </div>
    )
}

export default Checkout
