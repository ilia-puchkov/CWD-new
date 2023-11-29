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
import useCallFormValidation from '../../utils/callFormValidation'
import { formStyle, inputStyle } from '../PopupForm/formStyles'

interface IFormData {
  name: string
  phone: string
}

interface PopupCallProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: IFormData) => object
}

function PopupCall({ isOpen, onClose, onSubmit }: PopupCallProps) {
  const { handleChange, errors, values, resetForm, isValid } =
    useCallFormValidation()

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
      <Box sx={formStyle} component="form" onSubmit={handleSubmit}>
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
          <Button variant="contained" type="submit" disabled={!isValid}>
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
