import React, { ChangeEvent, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { typoStyle, inputStyle } from './formStyles'

interface QuestionsPopupFormProps {
  questionNumber: number
  questionText: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: number
  formValues: object
}

function QuestionsPopupForm({
  questionNumber,
  questionText,
  onChange,
  inputValue,
  formValues,
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
        value={formValues.questionNumber || ''}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
