interface InitialStateInterface {
    todoList: object[]
}

interface ActionInterface  {
    type: string,
    payloud: object
}

const ADD_TASK: string = 'ADD_TASK';
const EDIT_TASK: string = 'EDIT_TASK';
const COMPLETED_TASK: string = 'COMPLETED_TASK';
const DELETE_TASK: string = 'DELETE_TASK';

const initialState: InitialStateInterface = {
    todoList: [],
}

const TodoReducer = (state = initialState, action: ActionInterface) => {
    switch(action.type) {
        case ADD_TASK: return ({
            ...state,
            todoList: state.todoList.push(action.payloud)
        });
        case EDIT_TASK: return ({
            ...state
        });
        case COMPLETED_TASK: return ({
            ...state
        });
        case DELETE_TASK: return ({
            ...state
        });
        default: return state;
    }
} 

export default TodoReducer