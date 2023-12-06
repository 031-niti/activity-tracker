import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReducer = combineReducers({
    activitiesReducer: activitiesReducer,
});

export default rootReducer;