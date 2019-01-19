import * as SearchVideoAction from '../actions/searchVideoAction';

const initialState = {
    username: 'test',
    videos: [],
    videoTitle: null,
    loading: true,
    error: null
};

export function searchVideoReducer(state = initialState, action) {
    switch (action.type) {
        case SearchVideoAction.SAVE_VIDEO_TITLE: {
            return { ...state, loading: false, error: null, videoTitle: action.payload }
        }
        case SearchVideoAction.FETCH_REQUEST: {
            return { ...state, loading: true, error: null }
        }
        case SearchVideoAction.FETCH_VIDEOS_SUCCESS: {
            return { ...state, loading: false, videos: action.payload }
        }
        default: {
            return state;
        }
    }
}