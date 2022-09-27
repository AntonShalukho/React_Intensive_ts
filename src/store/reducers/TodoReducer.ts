import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

export type TodoType = {
    id: string,
    title: string,
    isActive: boolean
}

interface TodoInitialStateInterface {
    todoList: TodoType[]
}


const initialState: TodoInitialStateInterface = {
    todoList: [],
}

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const TodoReducer = (state: TodoInitialStateInterface = initialState, action: PayloadAction<TodoType>) => {
    switch(action.type) {
        case ADD_TASK: return ({
            ...state,
            todoList: state.todoList.push(action.payload)
        });
        case EDIT_TASK: return ({
            ...state,
            todoList: state.todoList.forEach((el, index) => {
                if(el.id === action.payload.id) {
                    state.todoList[index].title = action.payload.title
                }
            })
        });
        case DELETE_TASK: return ({
            ...state,
            todoList: state.todoList.forEach((el, index) => {
                if(el.id === action.payload.id) {
                    state.todoList = state.todoList.splice(index, 1)
                }
            })
        });
        case COMPLETED_TASK: return ({
            ...state,
            todoList: state.todoList.forEach((el, index) => {
                if(el.id === action.payload.id) {
                    state.todoList[index].isActive = !state.todoList[index].isActive
                }
            }) 
        })
    }
}

export default TodoReducer
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