import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from 'store/ducks/mapPoints';
import { requestUser } from './mapPoints';

export default function* rootSaga() {
  return yield all([
    takeLatest(MapTypes.REQUEST_USER, requestUser),
  ]);
}
