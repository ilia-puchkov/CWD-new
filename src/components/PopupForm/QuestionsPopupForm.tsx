import React from 'react'
import { TextField, Typography } from '@mui/material'
import { typoStyle, inputStyle } from './formStyles'
import useFormValidation from '../../utils/formValidation'

interface QuestionsPopupFormProps {
  questionNumber: number
  questionText: string | undefined
}

function QuestionsPopupForm({
  questionNumber,
  questionText,
}: QuestionsPopupFormProps) {
  const { handleChange, values } = useFormValidation()
  return (
    <>
      <Typography variant="h3" sx={typoStyle}>
        {questionText}
      </Typography>
      <TextField
        onChange={handleChange}
        variant="standard"
        color="primary"
        sx={inputStyle}
        type="text"
        label="Ваш ответ"
        name={`question${questionNumber}`}
        value={values.questionNumber || ''}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
