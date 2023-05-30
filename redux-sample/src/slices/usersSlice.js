import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usersArray: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            action.payload.id = Date.now()
            state.usersArray.push(action.payload)
        },
        editUser: (state, action) => {
            state.usersArray.map(e => {
                if (e.id == action.payload.id) {
                    e.email = action.payload.email;
                    e.password = action.payload.password;
                }
                return e;
            })
        },
        deleteUser: (state, action) => {
           state.usersArray= state.usersArray.filter(e => e.id != action.payload.id)
        },
    },
})

export const { addUser, editUser ,deleteUser} = usersSlice.actions
export default usersSlice.reducer