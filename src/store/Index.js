import { combineReducers, configureStore } from '@reduxjs/toolkit'
import NameSlice from './slices/NameSlice'

const rootReducer = combineReducers({
    name: NameSlice
})

const store = configureStore({
    reducer: rootReducer
})

export const NameSelector = (state) => state.name.value;

export default store