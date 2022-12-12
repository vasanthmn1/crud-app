import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
