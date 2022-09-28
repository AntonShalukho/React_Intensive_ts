import { configureStore, combineReducers } from "@reduxjs/toolkit"
import NameReducer from "./reducers/NameReducer"
import  TodoSlice  from "./reducers/TodoReducer"

const rootReducer = combineReducers({
    name: NameReducer,
    todo: TodoSlice
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

