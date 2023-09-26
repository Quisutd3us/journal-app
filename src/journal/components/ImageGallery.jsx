import { useSelector } from "react-redux";

import { ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = () => {
  const { activeNote } = useSelector(state => state.journal);
  const { title, imageUrls } = activeNote;
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      cols={4}
      rowHeight={164}>
      {imageUrls.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`${title}-image-${index}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
