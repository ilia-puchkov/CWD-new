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
  height: '110%',
  opacity: '0.8',
  filter: 'blur(2px) brightness(0.8)',
  zIndex: '-3',
  // boxShadow: '0px 25px 0px -2px grey',
}

const appBotImage = {
  position: 'absolute',
  width: '200%',
  height: '110%',
  opacity: '1',
  right: '0',
  bottom: '0',
  zIndex: '-2',
  // boxShadow: '0px 25px 0px -2px grey',
}

const imageModuleStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

const imageNoduleBoxStyles = {
  maxWidth: '85vw',
  display: 'flex',
  justifyItems: 'center',
  flexDirection: 'column',
  border: 'none',
}

export {
  appBoxStyle,
  appContainerStyle,
  appTopImage,
  imageModuleStyles,
  imageNoduleBoxStyles,
  appBotImage,
}
