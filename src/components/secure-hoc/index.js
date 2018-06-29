import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../store/user/selectors';
import { actionUserLogin } from '../../store/user/actions';

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state.user),
});

const mapDispatchToProps = dispatch => ({
    handleUserLogin: () => dispatch(actionUserLogin()),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SecureHoc extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        currentUser: PropTypes.object,
        handleUserLogin: PropTypes.func,
    }

    render() {
        if (!this.props.currentUser) {
            return (
                <div>
                    <h2>Please login to Twitter</h2>
                    <button onClick={this.props.handleUserLogin}>Login</button>
                </div>
            );
        }

        return (
            this.props.children
        );
    }
}
