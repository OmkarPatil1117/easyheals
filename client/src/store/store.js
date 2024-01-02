import {configureStore} from "@reduxjs/toolkit"
import alertSlice from "../fetures/alertSlice"

export const store = configureStore({
    reducer : {
        alertSlice : alertSlice
    }
})