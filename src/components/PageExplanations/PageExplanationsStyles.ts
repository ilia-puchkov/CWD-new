const hrStyle = {
  height: '2px',
  boxShadow: '0px 0px 2px 1px #F02ED1',
  width: '100%',
  margin: 0,
  backgroundColor: '#F02ED1',
  border: 'none',
  borderRadius: '1px',
}

const hr1Style = {
  height: '2px',
  width: '25%',
  '@media (max-width:600px)': {
    width: '10%',
  },
}

const hr2Style = {
  height: '2px',
  width: '30%',
  '@media (max-width:600px)': {
    width: '15%',
  },
}

const hr3Style = {
  height: '2px',
  width: '35%',
  '@media (max-width:600px)': {
    width: '20%',
  },
}

const hr4Style = {
  height: '2px',
  width: '40%',
  '@media (max-width:600px)': {
    width: '15%',
  },
}

const hr5Style = {
  height: '2px',
  width: '45%',
  '@media (max-width:600px)': {
    width: '10%',
  },
}

const numberStyle = {
  textShadow:
    '-7px 0 10px #e60073, 0 7px 10px #e60073, 7px 0 10px #e60073, 0 -7px 10px #e60073',
}

const explanationDivisionStyle = 3

const explanationSpacing = 1.4

export {
  hrStyle,
  hr1Style,
  hr2Style,
  hr3Style,
  hr4Style,
  hr5Style,
  numberStyle,
  explanationDivisionStyle,
  explanationSpacing,
}
