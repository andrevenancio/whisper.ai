import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import LoginComponent from './login';

import './style.scss';

class Menu extends PureComponent {
    render() {
        return (
            <nav className="navigation">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/create" activeClassName="active">Create</NavLink>
                <NavLink exact to="/detail" activeClassName="active">Detail</NavLink>
                <NavLink exact to="/test-api" activeClassName="active">Test API</NavLink>
                <LoginComponent />
            </nav>
        );
    }
}

export default Menu;
