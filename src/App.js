import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Breadcrumb from "./components/Nav/Breadcrumb";
import {ThemeProvider} from "@material-ui/core"
import theme from "./theme"
import Footer from "./components/Nav/Footer";
import ContactPage from "./components/Page/ContactPage"
import Resume from "./components/Page/Resume"
import HomePage from "./components/Page/Home/HomePage"
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'



  
  function App() {
    return (
  
   <>
  <Breadcrumb />
  <HomePage />
  <ContactPage />
  <Resume />
 </> 

 
  );
}


export default App;