import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import pageAboutUsBackground from '../../images/about-background.png'

interface PageAboutUsProps {
  onPopupFormClick: () => void
}

function PageAboutUs({ onPopupFormClick }: PageAboutUsProps) {
  return (
    <Box
      component="section"
      id="about"
      position="relative"
      display={'flex'}
      justifyContent={'center'}
      sx={{
        // backgroundImage: `url(${pageAboutUsBackground})`,
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
        padding: '20px 0 40px',
        minHeight: '600px',
        '@media (max-width:600px)': {
          backgroundSize: 'cover',
          padding: '5px 10px',
        },
      }}
    >
      <img
        src={pageAboutUsBackground}
        className="pageAboutUsImage"
        alt="about-us-background"
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent="center"
        sx={{
          border: '1px solid #1b1b1b',
          borderRadius: '10px',
          bgcolor: 'rgba(0, 0, 0, 0.2)',
          padding: '10px',
          zIndex: 2,
          maxWidth: '500px',
          marginRight: '110px',
          marginLeft: 'auto',
          '@media (max-width:600px)': {
            marginRight: '0',
            marginLeft: '0',
          },
        }}
      >
        <aside
          style={{
            borderLeft: '2px solid #2ec2f0',
            boxShadow: 'inset 5px 0 2px -5px #2ec2f0',
            color: '#2ec2f0',
            marginBottom: '10px',
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            ml={1}
            sx={{
              fontFamily: 'Merriweather',
              '@media (max-width:600px)': {
                textAlign: 'left',
              },
            }}
          >
            О НАС
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary.contrastText"
            mb={1}
            ml={1}
            sx={{ fontFamily: 'Merriweather' }}
          >
            мы, Катя и Эрик - пара сумасшедших креативщиков, живущих по принципу
            &quot;для праздника не нужен повод &quot;!
          </Typography>
        </aside>
        <Typography
          variant="body2"
          color="primary.contrastText"
          gutterBottom
          mb={2}
          textAlign={'center'}
        >
          Все началось с оригинальных свиданий и организаций дней рождений друг
          для друга, а затем квартирники, массовые мероприятия, предсвадебная
          фотосессия под водой и свадьба с настоящими змеями, тараканами и
          приключениями в стиле Fort Boyard.
        </Typography>
        <Typography
          variant="body2"
          color="primary.contrastText"
          gutterBottom
          mb={2}
          textAlign={'center'}
        >
          Теперь мы постоянно набираем обороты и не можем остановиться дарить
          яркие впечатления себе и всем вокруг.
        </Typography>
        <Typography
          variant="body2"
          color="primary.contrastText"
          gutterBottom
          mb={2}
          zIndex={'2'}
          textAlign={'center'}
        >
          Присоединяйтесь к нам и Вы получите те ивенты, которыми похвастаетесь
          в соцсетях, а через много-много лет Ваши внуки будут наизусть знать
          истории о ЛЕ-ГЕН- ...подождите ...подождите ..-ДАР-НЫХ мероприятиях!
        </Typography>
        <Button
          onClick={onPopupFormClick}
          variant="outlined"
          color="primary"
          size="small"
          sx={{
            transition: '.7s ease-in-out',
            margin: '20px auto 10px',
            zIndex: 2,
            ':hover': {
              bgcolor: 'primary.main', // theme.palette.primary.main
              color: 'white',
            },
          }}
        >
          Заполнить анкету
        </Button>
      </Box>
    </Box>
  )
}

export default PageAboutUs
