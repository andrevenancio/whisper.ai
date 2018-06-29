import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { selectAppReady } from './store/app/selectors';
import { MenuComponent, SecureHoc } from './components';
import { Home, Create, Detail } from './containers';
import { PATHS } from './constants';

const ROUTES = [
    {
        path: PATHS.HOME,
        component: Home,
        exact: true,
    },
    {
        path: PATHS.CREATE,
        component: Create,
        exact: true,
        secure: true,
    },
    {
        path: PATHS.DETAIL,
        component: Detail,
        exact: true,
    },
];

const render = (Component, props, options = { secure: false }) => {
    if (options.secure) {
        return (
            <SecureHoc>
                <Component {...props} />
            </SecureHoc>
        );
    }

    return (
        <Component {...props} />
    );
};

class Application extends PureComponent {

    static propTypes = {
        ready: PropTypes.bool,
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderApp() {
        return (
            <div className="container">
                <MenuComponent />
                <Switch>
                    {
                        ROUTES.map((route, index) => {
                            const { component, path, exact, secure } = route;
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    exact={exact}
                                    render={props => render(component, props, { secure })}
                                />
                            );
                        })
                    }
                    <Redirect path={PATHS.ALL} to={PATHS.HOME} />
                </Switch>
            </div>
        );
    }

    render() {
        return (
            <Router>
                { !this.props.ready ?
                    this.renderLoading() :
                    this.renderApp()
                }
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    ready: selectAppReady(state.app),
});

export default connect(mapStateToProps)(Application);
