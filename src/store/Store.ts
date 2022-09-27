import { configureStore, combineReducers } from "@reduxjs/toolkit"
import NameReducer from "./reducers/NameReducer"
import  TodoReducer  from "./reducers/TodoReducer"

const rootReducer = combineReducers({
    name: NameReducer,
    todo: TodoReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store