export const FETCH_REQUEST = '[SearchVideoAction] - FETCH_REQUEST';
export const FETCH_VIDEOS_SUCCESS = '[SearchVideoAction] - FETCH_VIDEOS_SUCCESS';
export const GET_VIDEOS = 'GET_VIDEOS';
export const SAVE_TITLE = 'SAVE_TITLE'

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({ type: FETCH_VIDEOS_SUCCESS, payload });
export const getVideos = (payload) => ({ type: GET_VIDEOS, payload });
export const saveMoveTitle = (payload) => ({ type: SAVE_TITLE, payload })