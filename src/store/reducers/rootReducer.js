import {combineReducers} from "redux";
import {searchVideoReducer} from "./searchVideoReducer";

export const rootReducer = combineReducers({
    videosData: searchVideoReducer,
});
