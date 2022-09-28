import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TodoType = {
    id: string,
    title: string,
    isActive: boolean
}

export type TodoInitialStateType = {
    todoList: Array<TodoType>
}


const initialState: TodoInitialStateType = {
    todoList: [] as Array<TodoType>,
}

const TodoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        ADD_TASK: function(state, action: PayloadAction<TodoType>) {
            state.todoList.push(action.payload)
        },
        EDIT_TASK: function(state, action: PayloadAction<TodoType>) {
            let acc = state.todoList.find((el) => el.id === action.payload.id)
            if(acc) {
                acc.title = action.payload.title
            }
        },
        DELETE_TASK: function(state, action: PayloadAction<TodoType>) {
            state.todoList.forEach((el, index) => {
                if(el.id === action.payload.id) {
                    state.todoList.splice(index, 1)
                }
            })
        },
        TOGGLE_TASK: function(state, action: PayloadAction<TodoType>) {
            let acc = state.todoList.find((el) => el.id === action.payload.id)
            if(acc) {
                acc.isActive = action.payload.isActive
            }
        },
    }
})

export default TodoSlice.reducer
export const {ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK} = TodoSlice.actions

// export const ADD_TASK = 'ADD_TASK';
// export const EDIT_TASK = 'EDIT_TASK';
// export const COMPLETED_TASK = 'COMPLETED_TASK';
// export const DELETE_TASK = 'DELETE_TASK';

// const TodoReducer = (state = initialState, action: PayloadAction<TodoType>) => {
//     switch(action.type) {
//         case ADD_TASK: return ({
//             ...state,
//             todoList: () => {
//                 let acc = state.todoList
//                 if (acc instanceof Array) {
//                 }
//                 acc.push(action.payload)
//                 return acc
//             }
//         });
//         case EDIT_TASK: return ({
//             ...state,
//             todoList: () => {
//                 let acc = state.todoList.map((el, index) => {
//                     if(el.id === action.payload.id) {
//                         el.title = action.payload.title
//                     }
//                     return el
//                 })
//                 return acc
//             }
//         });
//         case DELETE_TASK: return ({
//             ...state,
//             todoList: () => {
//                 state.todoList.forEach((el, index) => {
//                     if(el.id === action.payload.id) {
//                         state.todoList.splice(index, 1)
//                     }
//                 })
//                 return state.todoList
//             }
//         });
//         case COMPLETED_TASK: return ({
//             ...state,
//             todoList: () => {
//                 state.todoList.map((el) => {
//                     if(el.id === action.payload.id) {
//                         el.isActive = !el.isActive
//                     }
//                 }) 
//                 return state.todoList
//             }
//         })
//         default: return state
//     }
// }

// export default TodoReducer
// export const ADD_TASK = createAction('ADD_TASK');
// export const EDIT_TASK = createAction('EDIT_TASK');
// export const COMPLETED_TASK = createAction('COMPLETED_TASK');
// export const DELETE_TASK = createAction('DELETE_TASK');
// const TodoReducer = createReducer(initialState, {
//     ADD_TASK: function(state: TodoInitialStateInterface, action: PayloadAction<TodoType>) {
//         todoList: state.todoList.push(action.payload)
//     },
//     EDIT_TASK: function(state: TodoInitialStateInterface, action: PayloadAction<TodoType>) {
//         todoList: state.todoList.push(action.payload)
//     },
//     COMPLETED_TASK: function(state: TodoInitialStateInterface, action: PayloadAction<TodoType>) {
//         todoList: state.todoList.push(action.payload)
//     },
//     DELETE_TASK: function(state: TodoInitialStateInterface, action: PayloadAction<TodoType>) {
//         todoList: state.todoList.push(action.payload)
//     }
// })