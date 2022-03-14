import React from 'react'
import { StyledHeader, Button } from './Header.styled';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'
import { Container } from 'styled-bootstrap-grid'

export default function Header() {

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
      <StyledHeader>
    <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <h1>Think Digital</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}> 
        <p>With an extensive and diverse portfolio, Jadeite is a leader in outdoor advertising across the Pakistan.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <Button>Investment Opportunities</Button>
        </Col>
      </Row>
      </Grid>
      </ThemeProvider>   
      </StyledHeader>
    </Container>
  ) 
}
