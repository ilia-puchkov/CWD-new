import React, { useState } from 'react'
import { Box, Button, Modal, Stack, TextField } from '@mui/material'

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

function PopupCall() {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
