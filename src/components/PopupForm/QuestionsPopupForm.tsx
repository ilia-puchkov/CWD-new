import React from 'react'
import { TextField, Typography } from '@mui/material'
import { typoStyle, inputStyle } from './formStyles'

interface QuestionsPopupFormProps {
  questionNumber: number
  questionText: string | undefined
}

function QuestionsPopupForm({
  questionNumber,
  questionText,
}: QuestionsPopupFormProps) {
  return (
    <>
      <Typography variant="h3" sx={typoStyle}>
        {questionText}
      </Typography>
      <TextField
        variant="standard"
        color="primary"
        sx={inputStyle}
        type="text"
        label="Ваш ответ"
        name={`question${questionNumber}`}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
