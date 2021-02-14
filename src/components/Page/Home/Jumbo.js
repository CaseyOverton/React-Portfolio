import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import theme from '../../../theme'
import {ThemeProvider} from "@material-ui/core"
import '../../../style/style.css'


function Jumbo() {
    return (
<Jumbotron className='jumbo justify-content-center' >
     <Container>
         <Row>
             <Col>
                 <div className='jumboText'>
                 <h1 className='jumboText'>Casey Overton <br></br> Portfolio</h1>
                 </div>
                
             </Col>
        </Row>
   </Container>
</Jumbotron>
    )};
export default Jumbo;