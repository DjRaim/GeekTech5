import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(

    'getUsers',
    async function (info= null, {dispatch, rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (response.status === 200) {
                const users = await response.json()
                return users
            }
            else {
                throw Error('error: ${response.status}')
            }
        }
        catch (error) {
            return rejectWithValue(error.message)

        }

    }
)

export const createUser = createAsyncThunk(
    'createUser',
    async function (user, {dispatch, rejectWithValue}) {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/userss`, {
                method: "POST",
                headers: {
                    'creation': "account"
                },
                body: JSON.stringify(user)
            })
            if(response.status === 201) {
                return "success creation"
            }
            else {
                throw Error(`creation is failed`)
            }
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name:'usersSlice',
    initialState:{
        users: [],
        error: "",
        loading: false,
        success:""
    },
    extraReducers: builder => {
        console.log(getUsers)

        builder.addCase(getUsers.fulfilled,(state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            console.log(action)
        })
        builder.addCase(getUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.success = action.payload
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(createUser.pending, state => {
            state.loading = true
        })


    }
})



export default usersSlice.reducer
