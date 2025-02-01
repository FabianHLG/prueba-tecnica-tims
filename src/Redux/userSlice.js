import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    name: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {name, email} = action.payload;
            state.name = name;
            state.email = email;
        }
    }
})

export const { addUser} = userSlice.actions;
export default userSlice.reducer;