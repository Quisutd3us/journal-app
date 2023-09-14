import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // activeNote:{
        // id:'ABC123',
        // title:'',
        // body:'',
        // date:123456,
        // imageURLs :[] // [https://image1.jpg, https://image1.jpg, ,https://image1.jpg,]
        // }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        delNoteByID: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setSaving,
    updateNote,
    delNoteByID
} = journalSlice.actions;