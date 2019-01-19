import * as SearchVideoAction from '../actions/searchVideoAction';

const initialState = {
	username: 'test',
	videos: [],
	videoTitle: null,
	defaultVideo: true,
	loading: true,
	error: null
};

export function searchVideoReducer(state = initialState, action) {
	switch (action.type) {
		case SearchVideoAction.SAVE_VIDEO_TITLE: {
			return { ...state, loading: false, defaultVideo: true, error: null, videoTitle: action.payload };
		}
		case SearchVideoAction.FETCH_REQUEST: {
			return { ...state, loading: true, defaultVideo: false, error: null };
		}
		case SearchVideoAction.FETCH_VIDEOS_SUCCESS: {
			return { ...state, loading: false, defaultVideo: false, videos: action.payload };
		}
		default: {
			return state;
		}
	}
}
