import { fromJS } from 'immutable';

import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_UPDATE,
} from './actions';

const initialState = fromJS({
    // is the login or logout in progress?
    progress: false,
    currentUser: null,
});

export const user = (state = initialState, action) => {
    switch (action.type) {
    case USER_LOGIN:
        return state.withMutations((ctx) => {
            ctx.set('progress', true);
        });

    case USER_LOGOUT:
        return state.withMutations((ctx) => {
            ctx.set('progress', true);
        });

    case USER_UPDATE:
        return state.withMutations((ctx) => {
            ctx.set('progress', false);
            ctx.set('currentUser', fromJS(action.currentUser));
        });
    default:
        return state;
    }
};
