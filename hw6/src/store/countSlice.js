import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "countSlice",
    initialState: {
        result: ''
    },
    reducers: {
        countNumber: ( state, action ) => {

            let value1 = action.payload.valueOne
            let value2 = action.payload.valueTwo

            //проверка на пустые поля
            if ( value1 === '' || value2 === '' ) {
                state.result = "Заполните все поля"
                return state
            }

            switch (action.payload.event) {
                case "+":
                    state.result = +value1 + +value2
                    return state

                case "-":
                    state.result = +value1 - +value2
                    return state

                case "*":
                    state.result = +value1 * +value2
                    return state

                case "/":
                    if (+value2 === 0 ) {
                        state.result = "На ноль делить нельзя"
                        return state
                    }
                    state.result = +value1 / +value2
                    return state

                default: return state
            }

        },
    }
});

export const { countNumber } = countSlice.actions;
export default countSlice.reducer;