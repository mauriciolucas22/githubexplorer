import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from '../ducks/favorites';

export function* searchAndAddRepository(action) {
  const response = yield call(api.get, `/repos/${action.playload.repositoryName}`);

  yield put({ type: Types.ADD, playload: { repository: response.data } });
}