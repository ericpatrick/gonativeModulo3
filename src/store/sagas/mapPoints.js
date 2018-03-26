import { put, call, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as MapPointsCreators } from 'store/ducks/mapPoints';

export function* requestUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload.username}`);
    const coordinate = yield select(state => state.mapPoints.coordinate);

    const user = {
      id: Math.random(),
      name: data.name,
      bio: data.bio,
      avatarUrl: data.avatar_url,
      coordinate,
    };

    yield put(MapPointsCreators.userSuccess(user));
  } catch (err) {
    yield put(MapPointsCreators.userError('Usuário não encontrado!'));
  }
}
