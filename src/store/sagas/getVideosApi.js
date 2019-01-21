import {put} from 'redux-saga/effects';
import {API_KEY} from "../../assets/api_key";


export function* getVideosApi(action) {
    try {
        const payload = yield fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&key=${API_KEY}&q=${action.payload}`, {
            method: 'get'
        }).then((response) => response.json());
        console.log(payload, 'payloadzik');
        yield put({type: '[SearchVideoAction] - FETCH_VIDEOS_SUCCESS', payload});
    } catch (err) {
        console.log(err);
    }
}

export function* getVideoStatisitc(action) {
    try {
        const payload = yield fetch(`https://www.googleapis.com/youtube/v3/videos?id=${action.payload.items[0].id.videoId}&key=${API_KEY}&part=statistics`, {
            method: 'get'
        }).then((response) => response.json());

        yield put({type: '[SearchVideoAction] - FETCH_VIDEOS_STATISTICS_SUCCESS', payload});

    } catch (err) {
        console.log(err);
    }
}
