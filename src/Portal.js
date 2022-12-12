import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatUsers from './components/forms/CreatUsers'
import Editusers from './components/forms/Editusers'
import Userlist from './components/forms/Userlist'
import Viewusers from './components/forms/Viewusers'
import NavBar from './components/NavBar'
import Home from './Home'

const Portal = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>

                        <Route path='home/userlist' element={<Userlist />}></Route>
                        <Route path='home/creatusers' element={<CreatUsers />}></Route>
                        <Route path='home/edituser/:id' element={<Editusers />}></Route>
                        <Route path='/home/userview/:id' element={<Viewusers />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Portal
