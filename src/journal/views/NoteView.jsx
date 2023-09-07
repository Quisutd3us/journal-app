import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ my: 1 }}>
        <Grid item>
          <Typography fontSize={30} fontWeight={'light'}>28 of august , 2023</Typography>
        </Grid>
        <Grid item>
        <Button variant="outlined" >
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
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          placeholder="What happened today ?"
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <ImageGallery />

    </>
  )
}
