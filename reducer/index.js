const intialState = {
    isLoading: true,
    employee: [],
    editEmployee: {}
}

export default (state = intialState, action) => {
    switch(action.type){
        case 'isLoading':
        return true
        case 'FETCH_DATA':
            return {...state, isLoading: false, employee: action.payload}
        case 'EDIT_EMPLOYEE':
            return {...state, editEmployee: action.payload}
        default: return state
    }
}