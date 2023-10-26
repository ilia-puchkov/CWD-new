import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import pageAboutUsBackground from '../../images/about-background.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '500px',
  width: '450px',
  '@media (max-width:500px)': {
    width: '340px',
  },
  bgcolor: 'black',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 4,
  p: 5,
  pt: 2,
  backgroundImage: `url(${pageAboutUsBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
        <IconButton
          onClick={onClose}
          size="medium"
          sx={{ marginBottom: '20px', marginLeft: 'auto' }}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h2"
          color="primary.main"
          mb={1}
          textAlign={'center'}
          fontSize={'30px'}
        >
          Заказать звонок
        </Typography>
        <Stack direction="column" spacing={4}>
          <TextField
            variant="standard"
            label="Ваше имя"
            color="primary"
            sx={{
              input: {
                color: 'primary.main',
                borderBottom: '1px solid white',
              },
              label: {
                color: 'primary.contrastText',
              },
            }}
          ></TextField>
          <TextField
            variant="standard"
            label="Ваш телефон"
            color="primary"
            helperText=""
            type="phone"
            sx={{
              input: {
                color: 'primary.main',
                borderBottom: '1px solid white',
              },
              label: {
                color: 'primary.contrastText',
              },
            }}
          ></TextField>
          <Button variant="contained" disabled={false}>
            Заказать звонок
          </Button>
          <Typography
            variant="h3"
            color="primary"
            textAlign={'center'}
            sx={{
              fontSize: '10px',
              '@media (max-width:500px)': {
                fontSize: '10px',
              },
            }}
          >
            отправляя свои данные вы соглашаетесь с политикой конфиденциальности
          </Typography>
        </Stack>
      </Box>
    </Modal>
  )
}

export default PopupCall
