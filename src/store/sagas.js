import { fork, all } from 'redux-saga/effects';

import { watchAppRequests } from './app/sagas';
import { watchUserRequests } from './user/sagas';

export default function* () {
    yield all([
        fork(watchAppRequests),
        fork(watchUserRequests),
    ]);
}
