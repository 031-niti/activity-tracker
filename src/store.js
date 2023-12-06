import { composeWithDevTools } from "@redux-devtools/extension";
import {configureStore} from "@reduxjs/toolkit";
import activitiesReducer from "./reducers/activitiesReducer";
const store = configureStore(
    {
        reducer: activitiesReducer,
    },
    composeWithDevTools
);

export default store;
