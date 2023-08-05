import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    )
}