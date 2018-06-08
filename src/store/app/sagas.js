import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import { init } from '../../firebase/api';

import {
    APP_INIT,
    APP_READY,
} from './actions';

import {
    USER_UPDATE,
} from '../user/actions';

function* sagaAppInit() {
    const response = yield fetch('./config.json');
    const json = yield response.json();

    // init firebase SDK
    init(json.firebase);

    // check if user is already logged in and saves value to store
    yield firebase.auth().getRedirectResult();
    yield put({ type: USER_UPDATE, currentUser: firebase.auth().currentUser });

    // everything is loaded
    yield put({ type: APP_READY, ready: true });
}

export function* watchAppRequests() {
    yield takeLatest(APP_INIT, sagaAppInit);
}
