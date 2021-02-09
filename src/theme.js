import React from "react";
import {createMuiTheme} from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e57373",
      contrastText: "#ffffff"
    },
    secondary: {
        main: "#ef5350",
       
    }
  }
});
export default theme;