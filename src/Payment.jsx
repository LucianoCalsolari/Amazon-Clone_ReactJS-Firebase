import React,{useState}  from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import {useStateValue} from "./StateProvider"
import {Link} from "react-router-dom"
import {CardElement,useStripe,useElements} from"@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal }from "./reducer"

function Payment() {
    const [{basket, user},dispatch] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded,setSucceeded] =useState(false)
    const [processing, setProcessing] = useState("")
    const [error,setError] = useState(null)
    const[disabled,setDisabled] = useState(true)

    const handleSubmit = async  (event) =>{
        event.preventDefault()
        setProcessing(true)
    }
    const handleChange = e =>{

        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }


    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items
                        </Link>
                    )
                </h1>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Endereço de entrega</h3> 
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Endereço de Entrega</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Itens da sua cesta</h3>
                    </div>
                    <div className="payment__itens">
                        {basket.map(item =>(
                            <CheckoutProduct
                                id ={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}/>
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Metodo de pagamento</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">

                            <CurrencyFormat 
                                renderText = {(value) => (
                                    <>
                                        <p></p>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" R$ "}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processando</p>: "Comprar"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
