import NameReducer, { CHANGE_NAME } from "./reducers/NameReducer";
import { ADD_TASK, DELETE_TASK, EDIT_TASK, TodoType, TOGGLE_TASK } from "./reducers/TodoReducer";
import TodoReducer from "./reducers/TodoReducer";

describe('Name Reducer', () => {
    it('is name reducer work?', () => {
        const initialState = {name: ''}
        const result = NameReducer(initialState, {type: '', payload: ''})

        expect(result.name).toBe('')
    })
    it('change name', () => {
        const initialState = {name: ''}
        const result = NameReducer(initialState, {type: CHANGE_NAME, payload: 'Anton'})

        expect(result.name).toBe('Anton')
    })
})

const todoAction: TodoType = {id: '1', title: 'First task', isActive: true}
const todoAction2: TodoType = {id: '2', title: 'Second task', isActive: false}
const todoAction3: TodoType = {id: '3', title: 'Therd task', isActive: true}

describe('todo reducer test', () => {
    it('is todo reducer work', () => {
        const result = TodoReducer({todoList: []}, {type:  ''})

        expect(result.todoList).toEqual([])
    })
    it('adding new task', () => {
        const action = {type: ADD_TASK.type, payload: todoAction}
        const result = TodoReducer({todoList: []}, action)

        expect(result).toEqual({todoList: [ {id: '1', title: 'First task', isActive: true} ]})
    })
    it('should edit task', () => {
        const edit: TodoType = {id: '1', title: 'Edited First task', isActive: true}
        const action = {type: EDIT_TASK.type, payload: edit}
        const result = TodoReducer({todoList: [todoAction]}, action)

        expect(result.todoList[0].title).toBe('Edited First task')
        expect(result).toEqual({todoList: [ {id: '1', title: 'Edited First task', isActive: true} ]})
    })
    it('should delete task', () => {
        const action = {type: DELETE_TASK.type, payload: todoAction2}
        const initialState = {todoList: [todoAction, todoAction2]}
        const expectedState = {todoList: [todoAction]}
        const result = TodoReducer(initialState, action)

        expect(result).toEqual(expectedState)
    })
    it('should make task inactive', () => {
        const payload = {id: '1', isActive: false}
        const action = {type: TOGGLE_TASK.type, payload: payload}
        const initialState = {todoList: [todoAction, todoAction2]}
        const result = TodoReducer(initialState, action)

        expect(result.todoList[0].isActive).toBe(false)
    })
})