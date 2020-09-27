import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch ] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/32/br-books/2020/September/BoxFriday/1500x150_gridnarrow.jpg" alt=""/>

                <div >
                    <h1 className="checkout__title">Sua cesta de compras.</h1>
                        
                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}


                </div>
            </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
