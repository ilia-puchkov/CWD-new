import React, { useState } from 'react'
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
import QuestionsPopupForm from './QuestionsPopupForm'

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

const typoStyle = {
  color: 'primary.main',
  textAlign: 'center',
  fontSize: '20px',
}

interface PopupFormProps {
  isOpen: boolean
  onClose: () => void
}

const textToView = new Map<number, string>([
  [0, 'Ничего'],
  [1, '1. По какому поводу мероприятие?'],
  [2, '2. Желаемая дата и время мероприятия'],
  [3, '3. Бюджетные рамки'],
  [4, '4. Какую атмосферу праздника вы бы хотели создать?'],
  [
    5,
    '5. Увлечения/хобби и то, что очень любит человек, для которого устраиваем мероприятие',
  ],
  [
    6,
    '6. Что-то важное, что по вашему мнению нам нужно знать (аллергия, фобии, физические ограничения...)',
  ],
])

function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function handleClose() {
    setCurrentQuestion(0)
    onClose()
  }

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
  }

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          size="medium"
          sx={{ marginBottom: '20px', marginLeft: 'auto' }}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
        <Stack direction="column" spacing={2}>
          {currentQuestion === 0 && (
            <Typography variant="h3" sx={typoStyle}>
              Узнаем ваши предпочтения и организуем уникальное мероприятие!
            </Typography>
          )}
          {currentQuestion === 1 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion === 2 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion === 3 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion === 4 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion === 5 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion === 6 && (
            <QuestionsPopupForm question={textToView.get(currentQuestion)} />
          )}
          {currentQuestion <= 6 && (
            <Button variant="outlined" onClick={handleNextQuestion}>
              Далее
            </Button>
          )}
          {currentQuestion === 7 && (
            <>
              <Typography variant="h3" color="primary" textAlign={'center'}>
                Отправить анкету
              </Typography>
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
                sx={{
                  input: {
                    color: 'primary.main',
                    borderBottom: '1px solid white',
                  },
                  label: {
                    color: 'primary.contrastText',
                  },
                }}
                helperText=""
                type="phone"
              ></TextField>
              <Button variant="contained">Отправить анкету</Button>
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
                отправляя свои данные вы соглашаетесь с политикой
                конфиденциальности
              </Typography>
            </>
          )}
        </Stack>
      </Box>
    </Modal>
  )
}

export default PopupForm
