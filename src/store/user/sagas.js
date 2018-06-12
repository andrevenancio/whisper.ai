import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_UPDATE,
} from './actions';
import {
    setPersistence,
    login,
    logout,
} from '../../firebase/api';

function* sagaUserLogin() {
    try {
        const persistence = yield setPersistence();
        console.log('persistence set', persistence);
        // https://firebase.google.com/docs/auth/web/auth-state-persistence
        const response = yield login();
        console.log('login done');
        yield put({ type: USER_UPDATE, currentUser: response.user });
    } catch (error) {
        console.error(error);
    }
}

function* sagaUserLogout() {
    try {
        yield logout();
        yield put({ type: USER_UPDATE, currentUser: null });
    } catch (error) {
        console.error(error);
    }
}

export function* watchUserRequests() {
    yield takeLatest(USER_LOGIN, sagaUserLogin);
    yield takeLatest(USER_LOGOUT, sagaUserLogout);
}
