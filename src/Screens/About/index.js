import React from 'react'
import { H1,Aboutp,StyledAbout, Button, Para, AboutH, AboutP, Div, AboutHeader, AboutParagraph, DivCard, Image, AdsHeader } from './About.styled'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'
import Container from 'react-bootstrap/Container'

export default function About() {

  const theme = {
    flexboxgrid: {
      // Defaults 
      gridSize: 12, // columns
      gutterWidth: 0, // rem
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
      }
    }
  }
  return (
    <Container fluid>
      <StyledAbout>
      <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <H1>About</H1>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <AboutH>Jadeite is one of the Pakistan’s leading outdoor<br></br> media companies, with an extensive <br></br>portfolio that combines airports, roadside posters,<br></br> premium digital screens in prime locations and more.
        </AboutH>
        </Col>
      </Row>
      <Row>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <AboutP>Our offering also includes Shopping malls and cinemas,<br></br> as well as the Pakistan’s largest network of buses<br></br> in major towns and cities across the Pakistan.
        </AboutP>
        </Col>
      </Row>

      <br />
      <br/>
    
      <Row>
        <Div>
          
        <Col  xs={12} sm={12} md={12} lg={12}>
        <AboutHeader>Ceo'Message</AboutHeader>
        </Col>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <AboutParagraph>By combining outdoor with our radio and digital brands, and our world leading digital advertising platform,Jadeite is able to provide the most compelling “one stop” solution to brands, agencies and advertisers.
        </AboutParagraph>
        </Col>
        </Div>
       
      </Row>
    

   
      <Row>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <H1>Our Team</H1>
        </Col>
      </Row>
      <br/>
      <br/>
     
      <Row >
      <Col  xs={12} sm={12} md={4} lg={4}>
      <DivCard>
         <Image></Image>
        </DivCard>
        
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
        <DivCard>
         <Image></Image>
        </DivCard>
        </Col>
       
        <Col xs={12} sm={12} md={4} lg={4}>
        <DivCard>
         <Image></Image>
        </DivCard>
        </Col>
      
      </Row>
      <Row>
        <Col   xs={12} sm={12} md={12} lg={12} >
        <AdsHeader>Where Your Ads Will Be Displayed</AdsHeader>
        </Col>
      </Row>
      <Row>
      <Col xs={12} sm={12} md={2} lg={2}>
        
      </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
        <DivCard>
         <Image></Image>
        </DivCard>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
        <Aboutp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie morbi odio dui pulvinar.</Aboutp>
        </Col>
        
      
      </Row>
      <Row>
      <Col xs={12} sm={12} md={2} lg={2}>
        
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
        <Aboutp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie morbi odio dui pulvinar.</Aboutp>
        </Col>
        
        <Col xs={12} sm={12} md={4} lg={4}>
        <DivCard>
         <Image></Image>
        </DivCard>
        </Col>
        
      
      </Row>

      <Row>
        <Col  xs={12} sm={12} md={12} lg={12}>
        <H1>Let’s Do Business</H1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <Para>Our offering also includes Shopping malls and cinemas, <br></br>as well as the Pakistan’s largest network of buses in major <br></br>towns and cities across the Pakistan.
       </Para>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <Button>Investment Opportunities</Button>
        </Col>
      </Row>

      </Grid>
      </ThemeProvider>
      
      </StyledAbout>
    
    </Container>
  
  )
}
