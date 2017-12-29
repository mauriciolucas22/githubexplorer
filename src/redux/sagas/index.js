import { takeLatest } from 'redux-saga/effects';

import { searchAndAddRepository } from 'redux/sagas/favorites';

import { SEARCH } from '../types/favorites';

export default function* root() {
  yield [
    takeLatest(SEARCH, searchAndAddRepository)
  ];
}