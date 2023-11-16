import React from 'react'
import { TextField, Typography } from '@mui/material'
import { typoStyle, inputStyle } from './formStyles'

interface QuestionsPopupFormProps {
  questionNumber: number
  questionText: string | undefined
  onChange: () => void
  value: any
}

function QuestionsPopupForm({
  questionNumber,
  questionText,
  onChange,
  value,
}: QuestionsPopupFormProps) {
  return (
    <>
      <Typography variant="h3" sx={typoStyle}>
        {questionText}
      </Typography>
      <TextField
        onChange={onChange}
        variant="standard"
        color="primary"
        sx={inputStyle}
        type="text"
        label="Ваш ответ"
        name={`question${questionNumber}`}
        value={value.name || ''}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
