import React from 'react'
import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import galleryImages from '../../utils/galleryImages'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

interface IImagePopupProps {
  onImageClick: (p: object) => object
}

function PageGallery({ onImageClick }: IImagePopupProps) {
  function handleImageClick(e: React.UIEvent<HTMLElement>) {
    onImageClick(e.target)
  }
  return (
    <Box
      component="section"
      id="gallery"
      mt={8}
      sx={{
        padding: '40px 40px',
        '@media (max-width:900px)': {
          padding: '10px 5px',
        },
      }}
    >
      <Typography
        variant="h2"
        color="primary"
        textAlign={'center'}
        sx={{ fontFamily: 'Merriweather' }}
      >
        Галерея
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary.contrastText"
        textAlign={'center'}
        sx={{ fontWeight: '400' }}
      >
        Как может выглядеть Ваше событие
      </Typography>
      <Stack spacing={2}>
        <Box sx={{ width: 1, height: 500, overflowY: 'scroll' }}>
          <ImageList variant="quilted" cols={2} gap={5}>
            {galleryImages.map((image) => (
              <ImageListItem
                key={image.photo}
                cols={image.cols || 1}
                rows={image.rows || 1}
                onClick={handleImageClick}
              >
                <img
                  {...srcset(image.photo, 100, image.rows, image.cols)}
                  alt={image.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Box>
  )
}

export default PageGallery
