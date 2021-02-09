import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import {ThemeProvider, Button} from "@material-ui/core"
import theme from "./theme"
import { Router, Route, Switch } from "react-router";

constructor(props) {
super(props);
this.state = {
  title: 'Casey Overton'
  headerLinks: [
    { title: 'Home', path: '/'},
    { title: 'About', path: '/about'},
    { title: 'Contract', path: '/contact'},
  ],
  home: {
    title:'Casey Overton Portfolio'
    subTitle: 'Projects that make the difference',
    text:'Checkout projects below'
  },
  about: {
    title: "About Me"
  },
  conact: {
    title: "Let's Talk"
  }
}

}


class App extends React.Component  {
  render() {
    return (
      <Router>
    <ThemeProvider theme={theme}>
      <NavBar />
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="primary">
      Secondary
    </Button>
   </ThemeProvider>
  </Router>
    );
  }
}


export default App;