import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase'

function Login() {
    const history = useHistory() 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn= e =>{
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo"
                 src='https://www.bh1.com.br/wp-content/uploads/2018/05/logotipo-logomarca-amazon.gif'/>
            </Link>

            <div className="login__container">
                <h1>Fazer login</h1>
                <form>
                    <h5> E-mail</h5>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Senha</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={signIn} type='submit' className='login__signInButton'>Continuar</button>
                </form>

                <p> Ao continuar, você concorda com as 
                    Condições de Uso da Amazon. 
                    Por favor verifique a Notificação 
                    de Privacidade, Notificação 
                    de Cookies e a Notificação de 
                    Anúncios Baseados em Interesse.</p>
                <br/>
                <p>▪ Precisa de ajuda? </p>

                <p>Novo na Amazon?</p>

                <button type='submit' onClick={register} className='login__registerButton'>Criar sua conta Amazon</button>
            </div>
        </div>
    )
}

export default Login
