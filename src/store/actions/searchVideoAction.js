export const FETCH_REQUEST = '[SearchVideoAction] - FETCH_REQUEST';
export const FETCH_VIDEOS_SUCCESS = '[SearchVideoAction] - FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_STATISTICS_SUCCESS = '[SearchVideoAction] - FETCH_VIDEOS_STATISTICS_SUCCESS';
export const GET_VIDEOS = 'GET_VIDEOS';
export const SAVE_VIDEO_TITLE = 'SAVE_TITLE'
export const GET_VIDEOS_INFO = "GET_VIDEOS_INFO"

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({ type: FETCH_VIDEOS_SUCCESS, payload });
export const fetchStatisticsSuccess =(payload) => ({type: FETCH_VIDEOS_STATISTICS_SUCCESS, payload})
export const getVideos = (payload) => ({ type: GET_VIDEOS, payload });
export const saveVideoTitle = (payload) => ({ type: SAVE_VIDEO_TITLE, payload })
export const getVideosInfo = (payload) => ({type: GET_VIDEOS_INFO, payload})