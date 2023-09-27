import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote
} from './';
import { fileupload, retrieveNotes } from '../../helpers';

export const startNewNote = () => {
  return async (dispatch, getState) => {

    dispatch(savingNewNote());
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  }
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('The user UID dont exist.. is Logged?');
    const notes = await retrieveNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    const noteToFireStore = { ...activeNote };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    const result = await setDoc(docRef, noteToFireStore, { merge: true });
    // action ok?
    if (result) throw new Error('New Note action has errors...');

    dispatch(updateNote(activeNote))

  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {

    dispatch(setSaving());
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileupload(file)); 
    }
    const photoUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNote(photoUrls));
  };
};

