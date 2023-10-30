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
import useFormValidation from '../../utils/formValidation'

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

const inputStyle = {
  input: {
    color: 'primary.main',
    borderBottom: '1px solid white',
    borderRadius: 0,
  },
  label: {
    color: 'primary.contrastText',
  },
}

interface IContactData {
  name: string
  phone: string
}

interface PopupCallProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: IContactData) => void
}

function PopupCall({ isOpen, onClose, onSubmit }: PopupCallProps) {
  const { handleChange, errors, values, resetForm } = useFormValidation()

  function handleClose() {
    resetForm()
    onClose()
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(values)
    resetForm()
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <IconButton
          onClick={handleClose}
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
            onChange={handleChange}
            variant="standard"
            color="primary"
            sx={inputStyle}
            type="text"
            label="Ваше имя"
            name="name"
            value={values.name || ''}
            inputProps={{
              minLength: 2,
            }}
            helperText={errors.name}
            error={errors.name ? true : false}
            required
          ></TextField>
          <TextField
            onChange={handleChange}
            variant="standard"
            color="primary"
            sx={inputStyle}
            type="tel"
            label="Ваш телефон"
            name="phone"
            value={values.phone || ''}
            helperText={errors.phone}
            error={errors.phone ? true : false}
            required
          ></TextField>
          <Button variant="contained" type="submit" disabled={false}>
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
