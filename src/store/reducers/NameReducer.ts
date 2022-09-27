import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit"

export interface NameInitialStateInterface {
    name: string,
}

// interface ActionInterface  {
//     type: string,
//     payload: string
// }

export const CHANGE_NAME: string = 'CHANGE_NAME';

const initialState: NameInitialStateInterface = {
    name: 'initialState',
}

const NameReducer = (state = initialState, action: PayloadAction<string>) => {
    switch(action.type) {
        case CHANGE_NAME: return ({
            ...state,
            name: action.payload as string
        });
        default: return state;
    }
} 
// export const changeName = createAction('CHANGE_NAME')

// const NameReducer = createReducer(initialState, {
//     changeName: function(state: NameInitialStateInterface, action: PayloadAction<string>) {
//         state.name = action.payload
//     }
// })

export default NameReducer