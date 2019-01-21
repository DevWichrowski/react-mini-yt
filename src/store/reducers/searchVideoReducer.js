import * as SearchVideoAction from '../actions/searchVideoAction';


const initialState = {
	username: 'test',
	videos: [],
	videosStatistics: [],
	videoTitle: null,
	defaultVideo: true,
	loading: true,
	error: null,
	videoId: null,

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
			return { ...state, loading: false, defaultVideo: false, videos: action.payload, 
				videoId: action.payload.items[0].id.videoId	};
		}				
		case SearchVideoAction.FETCH_VIDEOS_STATISTICS_SUCCESS: {
			return { ...state, loading: false, defaultVideo: false, videosStatistics: action.payload}
		}
		default: {
			return state;
		}
	}
}
