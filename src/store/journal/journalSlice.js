import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messagesActions: {},
    notes: [],
    activeNote: null
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.messagesActions = {};
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messagesActions = {};
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      });
      state.messagesActions = {
        type:'update',
        message:`${action.payload.title}, Note was successful updated..`
      };
    },
    setPhotosToActiveNote: (state, action) => {
      state.isSaving = false;
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
    },
    clearNotesLogOut: (state) => {
      state.isSaving = false,
        state.messagesActions = {},
        state.notes = [],
        state.activeNote = null
    },
    deleteNote: (state, action) => {
      state.messagesActions = {
        type:'delete',
        message:'Note was successful Deleted..'
      };
      state.isSaving = false;
      state.activeNote = null;
      state.notes = state.notes.filter(note => {
        if (note.id !== action.payload) {
          return note;
        }
      });
    }
  }
});


// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogOut,
  deleteNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;