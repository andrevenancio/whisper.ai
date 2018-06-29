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

import { Menu } from './components';
import {
    Home,
    Create,
    Detail,
    TestAPI,
} from './routes';

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
                <Menu />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/test-api" component={TestAPI} />
                    <Redirect path="*" to="/" />
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
