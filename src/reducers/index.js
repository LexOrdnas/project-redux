import { combineReducers } from 'redux';

const initialState = {
    text: []
}

function textReducer(state = initialState, action) {
    if (action.type === "ADICIONAR") {
        return { text: [ ...state.text, { ...action.value }] };
    } else {
        return state;
    }
}

function titleReducer(state = { title: "..." }, action) {
    if (action.type === "ALTERAR") {
        return { title: action.value };
    } else {
        return state;
    }
}

const reducers = combineReducers( {textReducer, titleReducer} );

export default reducers;