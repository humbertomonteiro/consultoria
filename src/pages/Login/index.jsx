import './login.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    // const [ showPassword, setShowPassword ] = useState('')

    function handleLogin(e) {
        e.preventDefault()

        alert('ok')
    }
    return (
        <main className='container-login'>
            <h1>Consultoria</h1>
            <p>Faça sua consultoria de software de forma simples!</p>
            <form onSubmit={handleLogin}>
                <input 
                type="text"
                placeholder='Digite seu E-mail...'
                value={email}
                onChange={e => setEmail(e.target.value)} />

                <input 
                type="text"
                placeholder='Digite sua senha...'
                value={password}
                onChange={e => setPassword(e.target.value)} />

                <button type='submit'>Entrar</button>
            </form>

            <Link to='/register'>Não tem conta? Cadastre-se</Link>
        </main>
    )
}