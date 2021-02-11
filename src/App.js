import React from "react";
import Wrapper from "./components/Wrapper";
import Breadcrumb from "./components/Breadcrumb";
import {ThemeProvider, Button} from "@material-ui/core"
import theme from "./theme"
import { Router, Route, Switch } from "react-router";
import Footer from "./components/Footer"
import Cards from "./components/Breadcrumb"

// constructor(props) {
// super(props);
// this.state = {
//   title: 'Casey Overton'
//   headerLinks: [
//     { title: 'Home', path: '/'},
//     { title: 'About', path: '/about'},
//     { title: 'Contract', path: '/contact'},
//   ],
//   home: {
//     title:'Casey Overton Portfolio',
//     subTitle: 'Projects that make the difference',
//     text:'Checkout projects below'
//   },
//   about: {
//     title: "About Me"
//   },
//   conact: {
//     title: "Let's Talk"
//   }
// }



class App extends React.Component  {
  render() {
    return (
      // <Router>
    <ThemeProvider theme={theme}>
  <Breadcrumb />
  <Route path="/" exact render={() <Home} />
  }
 <Footer variant="contained" color="primary"/>
 </ThemeProvider>
  // </Router>
    )
  }}



export default App;