import React from 'react'
import { StyledFooter, ContactH, ContactP, h4, ListH, FollowH, FollowIcon, Input } from './Footer.styled'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'
import { Container } from 'styled-bootstrap-grid'

export default function Footer() {
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
      }
    }
  }
  return (
    <Container fluid>
    <StyledFooter>
    <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}></Col>
        <Col xs={12} sm={12} md={3} lg={3}>
         <h4> Contact Us</h4> 
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} ><ContactH>Head Office</ContactH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ContactP>Legacay Plaza, Opposite Al-Maida, Kohinoor City, Faisalabad.</ContactP></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ContactH>Telephone</ContactH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ContactP>041-8888888</ContactP></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ContactH>E-mail</ContactH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ContactP>jadeite@gmail.com</ContactP></Col>
          </Row>
          </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
         <h4>List</h4>

          <Row>
            <Col xs={12} sm={12} md={12} lg={12} ><ListH>Home</ListH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ListH>About</ListH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ListH>Team</ListH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ListH>Presentations</ListH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ListH>Achievement</ListH></Col>
            <Col xs={12} sm={12} md={12} lg={12}><ListH>Contact Sales</ListH></Col>
          </Row>
          </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
         <h4>Follow</h4>

         <Row>
            <Col xs={12} sm={12} md={12} lg={12}><FollowH>We’re always on the lookout for the cutting-edge tech and brand innovations. Join us today.</FollowH></Col>
            <Col xs={12} sm={12} md={12} lg={12}> <Input placeholder='E-mail Address'/></Col>
            <Col xs={12} sm={12} md={12} lg={12}><FollowIcon>Team</FollowIcon></Col>
         </Row>
         
          </Col>
      </Row>
    </Grid>
  </ThemeProvider>
  </StyledFooter>
  </Container>
  )
}
