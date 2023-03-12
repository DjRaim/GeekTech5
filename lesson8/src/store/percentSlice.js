import {createSlice} from "@reduxjs/toolkit";
import {decrement, increment} from "./countSlice";
import {getUsers} from "./usersSlice";

const percentSlice = createSlice({
    name:'percentSlice',
    initialState: {
        percent: 0
    },
    extraReducers: builder => {
        builder.addCase(increment,(state) => {
            state.percent += 1
        })

        builder.addCase(decrement, state => {
            state.percent -= 1
        })
        builder.addCase(getUsers.fulfilled, state => {
            state.percent = 'success'
        })
        builder.addCase(getUsers.rejected, state => {
            state.percent = 'error'
        })
    }
})

export default percentSlice.reducer