import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionUserLogout } from '../../store/user/actions';
import { selectCurrentUser } from '../../store/user/selectors';

import './style.scss';

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state.user),
});

const mapDispatchToProps = dispatch => ({
    handleUserLogout: () => dispatch(actionUserLogout()),
});

@connect(mapStateToProps, mapDispatchToProps)
export class CurrentUserComponent extends PureComponent {

    static propTypes = {
        currentUser: PropTypes.shape({
            displayName: PropTypes.string,
        }),
        handleUserLogout: PropTypes.func,
    }

    render() {
        const { currentUser, handleUserLogout } = this.props;

        const { photoURL } = currentUser || {};
        if (currentUser) {
            return (
                <div className="current-user">
                    <div className="current-user__details">
                        <img alt="" src={photoURL} />
                        <button onClick={handleUserLogout}>Logout</button>
                    </div>
                </div>
            );
        }
        return null;
    }
}
