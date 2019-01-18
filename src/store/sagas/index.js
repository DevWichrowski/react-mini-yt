import { takeLatest } from 'redux-saga/effects';
import getVideosApi from "./getVideosApi";

function* actionWatcher() {
    yield takeLatest('GET_VIDEOS', getVideosApi);
}

export default function* rootSaga() {
    yield [ actionWatcher() ];
}
