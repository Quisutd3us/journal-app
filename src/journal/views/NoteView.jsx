import { useEffect, useMemo, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DeleteOutlined, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components"
import { useForm } from '../../hooks';
import { setActiveNote, startDeleteNote, startSaveNote, startUploadingFiles } from "../../store/journal";


export const NoteView = () => {
  const dispatch = useDispatch()
  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(activeNote);
  const fileInputRef = useRef();

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Update Note', messageSaved, 'success');
    }
  }, [messageSaved])

  // Save Note
  const onSaveNote = () => {
    dispatch(startSaveNote())
  };

  // Delete Note
  const onDeleteNote = (id = '') => {
    dispatch(startDeleteNote(id));
  };


  // manage images
  const onFileInputChange = ({ target }) => {
    if (target.length === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  return (
    <>
      {/* upload Images and Save Note Buttons */}
      <Grid
        container
        direction={'row'}
        justifyContent={'end'}
        alignItems={'center'}
        sx={{ my: 1 }}>
        <Grid item>
          {/* input file input */}
          <input
            ref={fileInputRef}
            type={"file"}
            multiple
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />

          <IconButton
            color={'primary'}
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>

          {/* save button */}
          <Button
            disabled={isSaving}
            onClick={onSaveNote}
            variant="outlined" >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
      </Grid>
      {/* note creation date */}
      <Grid
        container
        direction={'row'}
        justifyContent={'start'}
        alignItems={'center'}
        sx={{ my: 1 }}>
        <Grid item>
          <Typography fontSize={25} fontWeight={'light'}>{dateString}</Typography>
        </Grid>
      </Grid>
      {/* Title and Body Note Fields */}
      <Grid
        container
        sx={{ my: 2 }}
      >
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Input a Title"
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          name={'title'}
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          placeholder="What happened today ?"
          sx={{ border: 'none', mb: 1 }}
          name={'body'}
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* deleted button section */}
      <Grid
        container
        direction={'row'}
        justifyContent={'end'}
        alignItems={'center'}
        sx={{ my: 2 }}
      >
        <Grid
          item
        >
          {/* Delete button */}
          <Button
            disabled={isSaving}
            onClick={() => onDeleteNote(activeNote.id)}
            variant="outlined" >
            <DeleteOutlined sx={{ fontSize: 30, mr: 1 }} />
            Delete Note
          </Button>

        </Grid>

      </Grid>

      {/* image gallery component */}
      <ImageGallery
        images={activeNote.imageUrls}
      />

    </>
  )
}
