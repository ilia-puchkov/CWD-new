import React from 'react'
import { Typography } from '@mui/material'
import { typoStyle } from './formStyles'

function formTitle() {
  return (
    <Typography variant="h3" sx={typoStyle}>
      Узнаем ваши предпочтения и организуем уникальное мероприятие!
    </Typography>
  )
}

export default formTitle
