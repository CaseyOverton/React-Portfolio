import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ClearAllSharpIcon from '@material-ui/icons/ClearAllSharp';
import theme from "../../theme"
import {ThemeProvider, Button} from "@material-ui/core"



const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
  });

export default function Footer() {
    const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>

    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >

      <BottomNavigationAction  label="Home" href="/HomePage" value="home" icon={<HomeIcon color='secondary'  />} />

      <BottomNavigationAction href="/Contact" label="Contact" value="contact" icon={<ContactMailIcon color='secondary'  />} />

      <BottomNavigationAction href="/Resume" label="Resume" value="resume" icon={<DashboardSharpIcon  color='secondary' />} />
     </BottomNavigation>
    </ThemeProvider>
  );
}
