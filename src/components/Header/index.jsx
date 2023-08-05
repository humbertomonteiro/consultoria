import './header.css'

import { Link } from 'react-router-dom'
import { SiCodepen } from 'react-icons/si'

export default function Header() {
    return (
        <header>
            <Link className='logo' to='/'> <SiCodepen />Consultoria</Link>

            <nav>
                <Link to='/'>Home</Link>
            </nav>

            <Link className='btn-login' to='/login'>Login</Link>
        </header>
    )
}