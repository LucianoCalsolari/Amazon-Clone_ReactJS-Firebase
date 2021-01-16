import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket }, dispatcher] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            Esse pedido contem um presentinho.
                        </small>
                    </>
                )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={" R$ "}
            />

            <button onClick={e => history.push('/payment')}>Prosseguir para o checkout</button>
        </div>
    )
}

export default Subtotal
