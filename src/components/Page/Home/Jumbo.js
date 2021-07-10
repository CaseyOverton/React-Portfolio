import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import theme from '../../../theme'
import {ThemeProvider} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import '../../../style/style.css'
import backgroundImg from '../../../assets/Img/code.png'
import { grey } from '@material-ui/core/colors'


function Jumbo() {
    const classes = useStyles();
    return (
<Jumbotron className={classes.header} >
     <Container>
         <Row>
             <Col>
                 <div className='text'>
                 <h1 className='jumboText'>Casey Overton <br></br> Portfolio</h1>
                 </div>
                
             </Col>
        </Row>
   </Container>
</Jumbotron>
    )};
    const useStyles = makeStyles((theme) => ({
    //     header: {
    //    background: 'url(require('../../../assets/Img/code.png'))'
    //     },
        text: {
           backgroundColor: 'rgb(131, 77, 153)'
             }
      }));
      
export default Jumbo;