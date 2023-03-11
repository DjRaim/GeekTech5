import { types } from "./types";

export function changeInputValueAction ( value ) {

    return {
        type: types.INPUT_VALUE,
        payload: value
    }
}

export function addNumberAction ( number ) {

    return {
        type: types.ADD_NUMBER,
        payload: number,
    }
}

export function clearNumberAction () {

    return {
        type: types.CLEAR_NUMBER,
    }
}