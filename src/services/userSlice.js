import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        users : []
    },
    reducers : {
        getAccounts : (state,action) => {
            state.users = action.payload
        },
    }
})

export const { getAccounts } = userSlice.actions
export default userSlice.reducer