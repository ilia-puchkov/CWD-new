import { Typography, Button } from '@mui/material'
import React from 'react'

interface PageAboutUsProps {
  onPopupFormClick: () => void
}

function PageAboutUs({ onPopupFormClick }: PageAboutUsProps) {
  return (
    <section id="about">
      <Typography variant="h2" color="primary.main">
        О НАС
      </Typography>
      <Typography variant="h4" color="primary.contrastText">
        мы, Катя и Эрик - пара сумасшедших креативщиков, живущих по принципу
        &quot;для праздника не нужен повод &quot;!
      </Typography>
      <Typography variant="body2" color="primary.contrastText" gutterBottom>
        Все началось с оригинальных свиданий и организаций дней рождений друг
        для друга, а затем квартирники, массовые мероприятия, предсвадебная
        фотосессия под водой и свадьба с настоящими змеями, тараканами и
        приключениями в стиле Fort Boyard.
      </Typography>
      <Typography variant="body2" color="primary.contrastText" gutterBottom>
        Теперь мы постоянно набираем обороты и не можем остановиться дарить
        яркие впечатления себе и всем вокруг.
      </Typography>
      <Typography variant="body2" color="primary.contrastText" gutterBottom>
        Присоединяйтесь к нам и Вы получите те ивенты, которыми похвастаетесь в
        соцсетях, а через много-много лет Ваши внуки будут наизусть знать
        истории о ЛЕ-ГЕН-...подождите...подождите..-ДАР-НЫХ мероприятиях!
      </Typography>
      <Button
        onClick={onPopupFormClick}
        variant="outlined"
        color="primary"
        size="small"
        sx={{
          width: 150,
          ':hover': {
            bgcolor: 'secondary.main', // theme.palette.primary.main
            color: 'white',
          },
        }}
      >
        Fill Form
      </Button>
    </section>
  )
}

export default PageAboutUs
