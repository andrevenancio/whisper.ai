import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import {
    About,
    Menu,
} from './components';

class Application extends PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        <Route path="/" exact render={() => <h1>whispers.ai</h1>} />
                        <Route path="/about" component={About} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Application;
