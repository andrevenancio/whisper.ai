import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import LoginComponent from './login';

import './style.scss';

class Menu extends PureComponent {
    render() {
        return (
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/detail">Detail</Link>
                <Link to="/test-api">Test API</Link>
                <LoginComponent />
            </nav>
        );
    }
}

export default Menu;
