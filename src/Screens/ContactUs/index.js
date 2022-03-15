import React from 'react'

import { StyledContact,Input, Button, Textarea
} from './Contact.styled'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'
import Container from 'react-bootstrap/Container'


export default function Contact() {
  const theme = {
    flexboxgrid: {
      // Defaults 
      gridSize: 12, // columns
      gutterWidth: 1, // rem
      outerMargin: 2, // rem
      mediaQuery: 'only screen',
      container: {
        sm: 46, // rem
        md: 61, // rem
        lg: 76  // rem
      },
      breakpoints: {
        xs: 0,  // em
        sm: 48, // em
        md: 64, // em
        lg: 75  // em
      },
    }
  }
  return (
   <Container fluid>
    <StyledContact>
      <p>Contact Us</p>
      
       <ThemeProvider theme={theme}>
         <Grid>
           <Row center="xs">
             <Col>
             <Input placeholder='First Name'/>
             </Col>
             <Col>
             <Input placeholder='Last Name'/>
             </Col>
           </Row>
           
           <Row center="xs">
             <Col>
             <Input placeholder='Phone Number'/>
             </Col>
             <Col>
             <Input placeholder='E-mail Address'/>
             </Col>
           </Row>
           
           <Row center="xs">
             <Col>
             <Textarea placeholder='Message'/>
             </Col>
           </Row>
           <Row center="xs">
             <Col>
             <Button>
                  Send
             </Button>
    
             </Col>
           </Row>
         </Grid>
         
       </ThemeProvider>
    </StyledContact>
     </Container>
  )
}
