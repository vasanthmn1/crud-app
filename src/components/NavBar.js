import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {

    // const navLinkstyle = ({ isactive }) => {
    //     return {
    //         fontSize: isactive ? "20" : "50",
    //         color: isactive ? "none" : null

    //     }
    // }
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="white"
                fixed={'top'}
                className={'position-sticky ps-0'}
            >
                <Container>
                    <Navbar.Brand className='text-primary'> <span className='text-danger'>CRUD</span><b>App</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto mt-2">
                            <NavLink className='NavHeading' to={"/home/userlist"}>
                                <b> UserList</b>

                            </NavLink>

                            <NavLink className='NavHeading' to={"/home/creatusers"}>
                                <b> Create Users</b>

                            </NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
