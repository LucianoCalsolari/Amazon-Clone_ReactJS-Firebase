import React,{ useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from "./Login"
import Payment from './Payment'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from "./firebase"
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51HWhsLGBF4AFD1gl9ZoKntDLixIoWU98xpc9n3cyBGZ6K18ygojuA2eP0FaHXM6Pux3hEquutm7oH8klT1YPrnD600N0XlkmtT')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() =>{

    auth.onAuthStateChanged(authUser =>{
      
      
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  },[])

  return (

    <Router>
      <div className="App">
 
        <Switch>

          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route> 


          <Route path="/login">
            <Login/>
          </Route> 

          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route> 
          
          <Route path="/payment">
            <Header />
              <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route> 

          <Route path="/">
            <Header />            
            <Home />
          </Route> 

        </Switch>
        
      </div>
    </Router> 
  ) 
}

export default App;
