import { createSlice} from "@reduxjs/toolkit"

export const alertSlice = createSlice({
    name : "alertSlice",
    initialState : {
        loading : false
    },
    reducers : {
        showLaoding : (state) => {
            state.loading = true
        },
        hideLoading : (state) => {
            state.loading = false
        }
    }
})

export const {showLaoding ,hideLoading } = alertSlice.actions
export default alertSlice.reducer



