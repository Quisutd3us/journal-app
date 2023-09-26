import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components"
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch()
  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

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

  return (
    <>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ my: 1 }}>
        <Grid item>
          <Typography fontSize={25} fontWeight={'light'}>{dateString}</Typography>
        </Grid>
        <Grid item>
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
      <ImageGallery />

    </>
  )
}
