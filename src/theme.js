import React from "react";
import {createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa4a2',
      main: '#e57373',
      dark: '#af4448',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
  },
});
export default theme;



