const initialState = {
    x:0,
    y:0

}; // Global State 

const reducer = ( state = initialState , action ) => {

    switch (action.type) {
        case 'Increment_x':
            return {
                ...state ,
                x: state.x +1
            }
        case 'Increment_Y':
        return {
            ...state ,
            y: state.y +1
        }
        default:
            return state;
    }

}

export default reducer;