import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPhotos = createAsyncThunk(
    'getPhotos',
    async function (info, { dispatch, rejectWithValue }) {
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();
        dispatch(photosInfo(photos));
    }
)

export const getPhoto = createAsyncThunk(
    'getPhoto',
    async function (id, { dispatch, rejectWithValue }) {
        dispatch(preloaderOn())
        const response = await fetch (`https://jsonplaceholder.typicode.com/photos/${id}`)
        const photo = await response.json()
        dispatch(photoInfo(photo))
        dispatch(preloaderOff())
    }
)

const photosSlice = createSlice ({
    name: "photoSlice",
    initialState: {
        photos: [],
        photo: {},
        preloader: false,
    },
    reducers: {
        photosInfo: ( state, action ) => {
            state.photos = action.payload
        },
        photoInfo: ( state, action ) => {
            state.photo = action.payload
        },
        preloaderOn: ( state ) => {
            state.preloader = true;
        },
        preloaderOff: ( state ) => {
            state.preloader = false;
        },
    }
})


const { photosInfo, photoInfo, preloaderOn, preloaderOff } = photosSlice.actions;
export default photosSlice.reducer