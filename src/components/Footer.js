import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ClearAllSharpIcon from '@material-ui/icons/ClearAllSharp';
import theme from "../theme"
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
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
      <BottomNavigationAction  label="Home" value="home" icon={<HomeIcon color='secondary'  />} />
      <BottomNavigationAction label="Contact" value="contact" icon={<ContactMailIcon color='secondary'  />} />
      <BottomNavigationAction label="Resume" value="resume" icon={<DashboardSharpIcon  color='secondary' />} />
      <BottomNavigationAction label="About Me" value="aboutMe" icon={<ClearAllSharpIcon  color='secondary' />} />
    </BottomNavigation>
    </ThemeProvider>
  );
}
