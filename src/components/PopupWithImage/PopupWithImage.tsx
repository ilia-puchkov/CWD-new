import React from 'react'
import { Box, IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { imageModuleStyles, imageNoduleBoxStyles } from '../../utils/appStyles'

interface PopupImageProps {
  image: any
  isOpen: boolean
  onClose: () => void
}

function PopupWithImage({ image, isOpen, onClose }: PopupImageProps) {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClick={onClose}
      sx={imageModuleStyles}
    >
      <Box sx={imageNoduleBoxStyles}>
        <IconButton
          onClick={onClose}
          size="medium"
          sx={{ marginBottom: '5px', marginLeft: 'auto' }}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
        <img
          src={image.src}
          alt={image.alt}
          style={{ maxWidth: '75vw', maxHeight: '75vh' }}
        />
      </Box>
    </Modal>
  )
}

export default PopupWithImage
