import { StoreState } from "../Models/reduxModel";
import{configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
export default function ConfigureStore(initialState?: StoreState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware:[thunk]
    })
}