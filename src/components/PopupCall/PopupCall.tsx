import React from 'react'
import { Box, Button, IconButton, Modal, Stack, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface PopupCallProps {
  isOpen: boolean
  onClose: () => void
}

function PopupCall({ isOpen, onClose }: PopupCallProps) {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Stack direction="column" spacing={2}>
          <TextField label="Name" color="primary"></TextField>
          <TextField
            label="Number"
            color="secondary"
            helperText="new error"
            type="phone"
          ></TextField>
          <Button variant="outlined">text</Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default PopupCall
