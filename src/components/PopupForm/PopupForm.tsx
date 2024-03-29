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
import useFormValidation from '../../utils/formValidation'
import { formStyle, typoStyle, inputStyle } from './formStyles'
import QuestionsPopupForm from './QuestionsPopupForm'

interface IFormData {
  name: string
  phone: string
  question1?: string
  question2?: string
  question3?: string
  question4?: string
  question5?: string
  question6?: string
}

interface PopupFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: IFormData) => void
}

function PopupForm({ isOpen, onClose, onSubmit }: PopupFormProps) {
  const { handleChange, errors, values, resetForm, isValid } =
    useFormValidation()
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
  }

  function handleClose() {
    setCurrentQuestion(0)
    onClose()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(values)
    resetForm()
    handleClose()
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
        <Stack direction="column" spacing={2}>
          {currentQuestion === 0 && (
            <Typography variant="h3" sx={typoStyle}>
              Узнаем ваши предпочтения и организуем уникальное мероприятие!
            </Typography>
          )}
          {currentQuestion === 1 && (
            <QuestionsPopupForm
              questionNumber={1}
              questionText={'1. По какому поводу мероприятие?'}
              onChange={handleChange}
              value={values.question1 || ''}
            />
          )}
          {currentQuestion === 2 && (
            <QuestionsPopupForm
              questionNumber={2}
              questionText={'2. Желаемая дата и время мероприятия'}
              onChange={handleChange}
              value={values.question2 || ''}
            />
          )}
          {currentQuestion === 3 && (
            <QuestionsPopupForm
              questionNumber={3}
              questionText={'3. Бюджетные рамки'}
              onChange={handleChange}
              value={values.question3 || ''}
            />
          )}
          {currentQuestion === 4 && (
            <QuestionsPopupForm
              questionNumber={4}
              questionText={
                '4. Какую атмосферу праздника вы бы хотели создать?'
              }
              onChange={handleChange}
              value={values.question4 || ''}
            />
          )}
          {currentQuestion === 5 && (
            <QuestionsPopupForm
              questionNumber={5}
              questionText={
                '5. Увлечения/хобби и то, что очень любит человек, для которого устраиваем мероприятие'
              }
              onChange={handleChange}
              value={values.question5 || ''}
            />
          )}
          {currentQuestion === 6 && (
            <QuestionsPopupForm
              questionNumber={6}
              questionText={
                '6. Что-то важное, что по вашему мнению нам нужно знать'
              }
              onChange={handleChange}
              value={values.question6 || ''}
            />
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
                Отправить анкету
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
                отправляя свои данные вы соглашаетесь&#10;
                <a
                  href="https://disk.yandex.ru/d/gIcpVBWKsJXtjw"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  с&#160;политикой&#160;конфиденциальности
                </a>
              </Typography>
            </>
          )}
        </Stack>
      </Box>
    </Modal>
  )
}

export default PopupForm
