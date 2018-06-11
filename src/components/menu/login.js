import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    actionUserLogin,
    actionUserLogout,
} from '../../store/user/actions';

import {
    selectCurrentUser,
    selectProgress,
} from '../../store/user/selectors';

class LoginComponent extends PureComponent {

    static propTypes = {
        currentUser: PropTypes.shape({
            displayName: PropTypes.string,
        }),
        handleUserLogin: PropTypes.func,
        handleUserLogout: PropTypes.func,
    }

    renderLoggedIn(user) {
        return (
            <span>
                <p>{user.displayName}</p>
                <img alt="" src={user.photoURL} />
                <button onClick={this.props.handleUserLogout}>Logout</button>
            </span>
        );
    }

    renderNotLoggedIn() {
        return (
            <span>
                <button onClick={this.props.handleUserLogin}>Login</button>
            </span>
        );
    }

    render() {
        const { currentUser } = this.props;
        return (
            currentUser ?
                this.renderLoggedIn(currentUser) :
                this.renderNotLoggedIn()
        );
    }
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state.user),
    progress: selectProgress(state.user),
});


const mapDispatchToProps = dispatch => ({
    handleUserLogin: () => dispatch(actionUserLogin()),
    handleUserLogout: () => dispatch(actionUserLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
