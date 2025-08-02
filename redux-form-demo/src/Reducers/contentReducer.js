import { ADD_CONTNET } from "../Action/ActionTypes";

const initialState = {
    content:['Test1','Test2']
};

const reducer = (state = initialState, action) => {

    console.log('actions - ', action);
    if(action.type === ADD_CONTNET){
        return {...state, content: [...state.content, action.payload]};
    }
    return state;
};

export const addContentAction = (payload) => {
    return {type: ADD_CONTNET, payload};
};
export default reducer;