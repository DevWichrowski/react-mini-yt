import { put } from 'redux-saga/effects';
import { API_KEY } from "../../assets/api_key";




export default function* getVideosApi(action) {
    try {
        const payload = yield fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&key=${API_KEY}&q=${action.payload}`, {
            method: 'get'
        }).then((response) => response.json());

        yield put({ type: '[SearchVideoAction] - FETCH_VIDEOS_SUCCESS', payload });
                
       /* const payload = yield fetch(`https://www.googleapis.com/youtube/v3/videos?id=${action.payload}&key=${API_KEY}&part=statistics`, {
            method: 'get'
        }).then((response) => response.json());

        yield put({ type: '[SearchVideoAction] - FETCH_VIDEOS_STATISTICS_SUCCESS', payload }); */

    } catch (err) {
        console.log(err);
    }
}
