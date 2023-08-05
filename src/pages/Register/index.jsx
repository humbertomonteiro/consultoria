import './register.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleRegister(e) {
        e.preventDefault() 
        alert('ok')
    }
    return (
        <main className='container-login'>
            <h1>Consultoria</h1>
            <p>Cadastre-se e faça sua consultoria de software de forma simples!</p>
            <form onSubmit={handleRegister}>
                <input 
                type="text"
                placeholder='Digite seu nome...'
                value={name}
                onChange={e => setName(e.target.value)} />

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

            <Link to='/login'>Já tem uma conta? Faça login</Link>
        </main>
    )
}