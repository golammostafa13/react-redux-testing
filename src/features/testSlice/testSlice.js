import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        name: "",
        email: "",
        age: ""
    },
    author: "Golam Mostafa"
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            console.log(action.payload)
            state.formData = action.payload;
        },
        setAuthor: (state, action) => {
            state.author = action.payload;
        }
    },
})

export const {setFormData, setAuthor} = testSlice.actions;
export default testSlice.reducer;