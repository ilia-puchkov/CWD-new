import React from 'react'
import { TextField, Typography } from '@mui/material'

const typoStyle = {
  color: 'primary.main',
  textAlign: 'center',
  fontSize: '20px',
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
        sx={{ input: { color: 'primary.main' } }}
      ></TextField>
    </>
  )
}

export default QuestionsPopupForm
