import React from 'react';
import {
    Navbar,
    Nav,
    NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navi = () => {
    return (
        <React.Fragment>
            <Navbar color="danger" expand="md">
                <Nav><NavLink to={'/'}>React</NavLink></Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to={'/post'}>Post</NavLink>
                        </NavItem>
                        &nbsp;&nbsp;
                        <NavItem>
                            <NavLink to={'/about'}>About</NavLink>
                        </NavItem>
                        &nbsp;&nbsp;
                        <NavItem>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </React.Fragment>
    )
};

export default Navi;