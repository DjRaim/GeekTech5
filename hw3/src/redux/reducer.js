const initialState={
    numb:0
}

function reducer(state=initialState,action) {

    if(action.type==='PLUS'){
        return {...state,numb: state.numb+1}
    }else if(action.type==='MINUS'){
        if(state.numb >0)
            return {...state, numb: state.numb-1}
    }
    return (
        state
    )
}

export default reducer