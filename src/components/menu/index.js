import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../constants';
import { CurrentUserComponent } from '../current-user';

import './style.scss';

export class MenuComponent extends Component {
    render() {
        return (
            <nav className="navigation">
                <NavLink exact to={PATHS.HOME} activeClassName="active">Home</NavLink>
                <NavLink to={PATHS.CREATE} activeClassName="active">Create</NavLink>
                <NavLink to={PATHS.DETAIL} activeClassName="active">Detail</NavLink>
                <CurrentUserComponent />
            </nav>
        );
    }
}
