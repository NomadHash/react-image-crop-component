import * as uploadImageApi from '../api/profileImageUpload';
import { call, put, takeEvery } from 'redux-saga/effects';

const UPLOAD_IMAGE = 'user/UPLOAD_IMAGE';
const UPLOAD_IMAGE_SUCCESS = 'user/UPLOAD_IMAGE_SUCCESS';
const UPLOAD_IMAGE_FAILURE = 'user/UPLOAD_IMAGE_FAILURE';

export const uploadState = (img) => ({
  type: UPLOAD_IMAGE,
  payload: img,
});

export function* userUploadSaga(action) {
  try {
    const uploadResult = yield call(uploadImageApi.uploadImage, action.payload);
    yield put({
      type: UPLOAD_IMAGE_SUCCESS,
      payload: uploadResult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: UPLOAD_IMAGE_FAILURE,
      payload: e,
    });
  }
}

export function* profileUploadSaga() {
  yield takeEvery(UPLOAD_IMAGE, userUploadSaga);
}

export default function profileUploadReducer(state = {}, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        url: action.payload,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
