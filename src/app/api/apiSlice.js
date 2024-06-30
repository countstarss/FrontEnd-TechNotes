/*
TODO: 01:Slice
MARK: - Slice
*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


/*
FIXME: 02:定义RTK Query API
MARK: - RTK Query
*/
export const apiSlice = createApi({
    // baseQuery：配置基础查询函数，通常使用 fetchBaseQuery 来进行网络请求，指定了基础 URL
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500'}),
    tagTypes: ['Note','User'],
    // endpoints：定义了多个端点（例如 getPosts 和 getUser），每个端点都有一个查询函数来指定如何获取数据
    endpoints:builder => ({})
})