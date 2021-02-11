import React from "react";
import Wrapper from "./components/Wrapper";
import Breadcrumb from "./components/Breadcrumb";
import {ThemeProvider, Button} from "@material-ui/core"
import theme from "./theme"
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Cards from "./components/Breadcrumb";
import HomePage from "./components/Page/HomePage"
import { BrowserRouter as Router } from 'react-router-dom'
// class App extends React.Component {


// constructor(props) {
// super(props);
// this.state = {
//   title: 'Casey Overton',
//   headerLinks: [
//     { title: 'Home', path: '/' },
//     { title: 'About', path: '/about' },
//     { title: 'Contract', path: '/contact' },
//   ],
//   home: {
//     title:'Casey Overton Portfolio',
//     subTitle: 'Projects that make the difference',
//     text:'Checkout projects below'
//   },
//   about: {
//     title: "About Me"
//   },
//   contact: {
//     title: "Let's Talk"
//   }
//  }
// }


  
  function App() {
    return (
  <Router>
  <ThemeProvider theme={theme}>
  <Breadcrumb />
    <Route path="/"  component={HomePage} />
 <Footer variant="contained" color="primary" />
 </ThemeProvider>
  </Router>
  );
}


export default App;