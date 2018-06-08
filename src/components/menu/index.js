import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import LoginComponent from './login';

class Menu extends PureComponent {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <LoginComponent />
            </nav>
        );
    }
}

export default Menu;