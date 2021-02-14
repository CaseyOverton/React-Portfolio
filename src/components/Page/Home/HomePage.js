import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import theme from '../../../theme'
import { ThemeProvider } from "@material-ui/core"
// import  GridItem  from "@material-ui/core/GridItem"
import  Grid  from "@material-ui/core/Grid"
import '../../../style/style.css'
import Jumbo from './Jumbo'
import Links from "./Links"
import Breadcrumb from "../../Nav/Breadcrumb";
import Carousel from "./Carousel"
import Timeline from '../../Timeline'
import Carousels from "../Home/Carousel"

function HomePage(props) {
    return (
<div>

        
        <Jumbo />
        <Links />
       
   
        <Carousels />
       
        <Timeline />
 </div>
   
    )
};
export default HomePage;