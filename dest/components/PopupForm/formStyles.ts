import pageAboutUsBackground from '../../images/about-background.png'

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

const formStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '500px',
  width: '450px',
  '@media (max-width:500px)': {
    width: '340px',
  },
  bgcolor: 'black',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 4,
  p: 5,
  pt: 2,
  backgroundImage: `url(${pageAboutUsBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

export { typoStyle, inputStyle, formStyle }
