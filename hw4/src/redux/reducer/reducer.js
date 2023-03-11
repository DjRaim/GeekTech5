import { types } from "../types"

const initialState = {
    inputValue: "",
    result: null,
    story: []

}

export default function reducer( state = initialState, action ) {

    switch (action.type) {

        case types.INPUT_VALUE:

            return { ...state, inputValue: action.payload }

        case types.ADD_NUMBER:

            const sum = +state.result + +action.payload

            return { ...state, result: sum, story: [...state.story, action.payload]}

        case types.CLEAR_NUMBER:

            return { ...state, result: null, inputValue: '', story: []}

        default: return state
    }
}