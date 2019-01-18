import * as SearchVideoAction from '../actions/searchVideoAction';

const initialState = {
    username: 'test',
    videos: [],
    loading: false,
    error: null
};

export function searchVideoReducer(state = initialState, action) {
    switch (action.type) {
        case SearchVideoAction.FETCH_REQUEST: {
            return {...state, loading: true, error: null}
        }
        case SearchVideoAction.FETCH_SUCCESS: {
            return {...state, loading: false, personalInfoArr: action.payload}
        }
        default: {
            return state;
        }
    }
}