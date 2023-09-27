import { PropTypes } from "prop-types";

import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      cols={4}
      rowHeight={164}>
      {
        images.map((image, index) => (
          <ImageListItem
          
            key={index}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={`image-${index}`}
              loading="lazy"
            />
          </ImageListItem>
        ))
      }
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array
};
