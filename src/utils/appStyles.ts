import backgroundNoise from '../images/page-background.png'

const appContainerStyle = {
  backgroundImage: `url(${backgroundNoise})`,
  '@media (max-width:600px)': {
    padding: '5px',
  },
  position: 'relative',
}

const appBoxStyle = {
  position: 'absolute',
  top: '-15px',
  left: '0px',
  width: '100%',
  height: '600px',
  zIndex: '-1',
  '@media (max-width:600px)': {
    height: '300px',
  },
}

const appTopImage = {
  width: '100%',
  height: '100%',
  opacity: '0.8',
  filter: 'blur(2px) brightness(0.8)',
  boxShadow: '0px 25px 0px -2px grey',
}

export { appBoxStyle, appContainerStyle, appTopImage }
