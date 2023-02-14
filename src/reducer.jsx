export const reducer = (state,action) =>{
    if (action.type == 'UPDATE_HOME'){
        return {
            ...state,
            name:action.payload.name,
            image: action.payload.image,
            para:action.payload.para
        }
    }

    if (action.type == 'UPDATE_ABOUT') {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            para: action.payload.para
        }
    }
    return state;
}