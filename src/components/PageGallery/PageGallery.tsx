import React from 'react'
import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import galleryImages from '../../utils/galleryImages'

function PageGallery() {
  return (
    <section>
      <Typography variant="h2">Gallery</Typography>
      <Typography variant="h4">Your event</Typography>
      <Stack spacing={4}>
        <Box sx={{ width: '95%', height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={3}>
            {galleryImages.map((image) => (
              <ImageListItem key={image.id}>
                <img
                  src={`${image.photo}?w=248&fit=crop&auto=format`}
                  alt={image.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </section>
  )
}

export default PageGallery
