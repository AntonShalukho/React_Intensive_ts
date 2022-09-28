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

//-----------------------------------------------------------------------------------

//****      I tried to make it using react-redux but it didn't work. 
//****      I think the problem in version react-redux in order to I don't know what version needed to make createAction / createReducer
//*****     But I think my example below should work on previous version


//------------------------------------------------------------------------------------
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