/*
TODO: 02:Redux Store
FIXME: 01:配置 Redux Store
MARK: - 配置 Redux Store
*/
// coonfig store

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
    reducer:{
        // 添加reducer
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})