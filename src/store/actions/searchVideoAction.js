export const FETCH_REQUEST = '[SearchVideoAction] - FETCH_REQUEST';
export const FETCH_SUCCESS = '[SearchVideoAction] - FETCH_SUCCESS';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({type: FETCH_SUCCESS, payload});