import React from 'react'
import Paper from '@material-ui/core/Paper';
import image from '../../assets/Img/contact.png'
import Button from '@material-ui/core/Button'
function ContactPage(props) {
    return (
        <div class='contact'>
           
            <div class="text">
             <h1>Casey Overton</h1><br></br>
             <h3>Email: overtonc1@gmail.com</h3>
             <h3>Phone: 919-482-5678</h3>
             <Button href="https://github.com/CaseyOverton" size="small" color="primary">
               Github Profile
             </Button>
             <Button href="https://www.linkedin.com/in/casey-overton-3584151b1/" size="small" color="primary">
               Linkedin
             </Button>
             </div>
        </div>
    )
}
export default ContactPage;