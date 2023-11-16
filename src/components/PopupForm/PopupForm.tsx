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
import formQuestions from './popupFormQuestions'

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
  const [questions, setQuestions] = useState(formQuestions)

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
              {questions[currentQuestion]}
            </Typography>
          )}
          {currentQuestion > 0 && currentQuestion <= 6 ? (
            <QuestionsPopupForm
              questionNumber={currentQuestion}
              questionText={questions[currentQuestion]}
              onChange={handleChange}
              value={values}
            />
          ) : (
            ''
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
