// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      text: string
      btn: string
      main: string
      secondary: string
      changeThemeBtn: string
    }
  }
}
