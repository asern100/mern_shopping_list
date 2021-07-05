import './style.css';
import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap' ;

const AppNavbar = () =>  {
    const [isOpen, setisOpen] = useState(false)
    
    const toggle = () => setisOpen(!isOpen)
    
    return (
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/asern100">
                            Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar
