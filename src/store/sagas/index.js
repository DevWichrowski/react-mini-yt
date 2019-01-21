import {takeLatest} from 'redux-saga/effects';
import {getVideosApi, getVideoStatisitc} from "./getVideosApi";

function* actionWatcher() {
    yield takeLatest('GET_VIDEOS', getVideosApi);
    yield takeLatest('[SearchVideoAction] - FETCH_VIDEOS_SUCCESS', getVideoStatisitc);
}

export default function* rootSaga() {
    yield [actionWatcher()];
}
