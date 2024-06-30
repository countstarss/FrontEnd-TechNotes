/*
TODO: 04:apiSlice
MARK: - APISlice
*/
import { 
    createSelector,
    createEntityAdapter
 } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

/*
TODO: 适配器
MARK: - 适配器
*/
const notesAdapter = createEntityAdapter({

})

// 适配器可以在初始化State之前对数据进行处理
const initialState = notesAdapter.getInitialState()

export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        /*
        TODO: 创建一个Hook
        MARK: - 创建Hook
        */
        getNotes: builder.query({
            query: () => '/notes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedNotes = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return notesAdapter.setAll(initialState, loadedNotes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'note', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'note', id }))
                    ]
                } else return [{ type: 'note', id: 'LIST' }]
            }
        }),
    }),
})

/*
TODO: 导出Hook
MARK: - 导出hook
*/
export const {
    useGetNotesQuery,
} = notesApiSlice



// returns the query result object
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select()

// creates memoized selector
const selectNotesData = createSelector(
    selectNotesResult,
    notesResult => notesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds
    // Pass in a selector that returns the notes slice of state
} = notesAdapter.getSelectors(state => selectNotesData(state) ?? initialState)
