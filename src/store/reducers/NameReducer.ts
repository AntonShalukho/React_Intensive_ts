import { PayloadAction } from "@reduxjs/toolkit"

export interface NameInitialStateInterface {
    name: string,
}

const initialState: NameInitialStateInterface = {
    name: '',
}

export const CHANGE_NAME: string = 'CHANGE_NAME';

const NameReducer = (state = initialState, action: PayloadAction<string>) => {
    switch(action.type) {
        case CHANGE_NAME: return ({
            ...state,
            name: action.payload
        });
        default: return state;
    }
} 

export default NameReducer
// interface ActionInterface  {
//     type: string,
//     payload: string
// }
// export const changeName = createAction('CHANGE_NAME')

// const NameReducer = createReducer(initialState, {
//     changeName: function(state: NameInitialStateInterface, action: PayloadAction<string>) {
//         state.name = action.payload
//     }
// })