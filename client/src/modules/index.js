import { combineReducers } from 'redux';
import profileUploadReducer, { profileUploadSaga } from './profileImageUpload';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ profileUploadReducer });
export function* rootSaga() {
  yield all([profileUploadSaga()]);
}

export default rootReducer;
