import { DefaultTheme } from 'styled-components'
//'rgba(255,79,79,0.78)'
const myTheme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    text: '#FFEFD6',
    main: '#0E5E6F',
    secondary: '#F2DEBA',
    btn: '#3A8891',
    changeThemeBtn: 'rgba(58,136,145,0.51)',
  },
}

const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    text: '#EEEEEE',
    main: '#222831',
    secondary: '#393E46',
    btn: '#3A8891',
    changeThemeBtn: '#393E46',
  },
}

export { myTheme, darkTheme }
