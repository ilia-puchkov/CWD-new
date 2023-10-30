import React from 'react'
import { TextField, Typography } from '@mui/material'

const typoStyle = {
  color: 'primary.main',
  textAlign: 'center',
  fontSize: '20px',
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

interface QuestionsPopupFormProps {
  question: string | undefined
}

function QuestionsPopupForm({ question }: QuestionsPopupFormProps) {
  return (
    <>
      <Typography variant="h3" sx={typoStyle}>
        {question}
      </Typography>
      <TextField
        variant="standard"
        label="Ваш ответ"
        color="primary"
        sx={inputStyle}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
