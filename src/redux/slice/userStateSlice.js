import { createSlice } from "@reduxjs/toolkit"

const initialState = false

export const userStateslice = createSlice({
    name : 'userLogin',
    initialState,
    reducers: {
        setLogin : (state , action) => {
            return{
                ...state,
                ...action.payload
            }
        },
        setLogout : (state) => state = initialState
    }
})

export default userStateslice.reducer
export const {setLogin , setLogout} = userStateslice.actions