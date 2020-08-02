import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import CardGroup from 'react-bootstrap/CardGroup'
import placeholder from '../placeholder-image.png'
import CardImg from 'react-bootstrap/CardImg'
import jtbg from '../jtbg.jpg'
import Head from '../headimage.jpg'
import Image from 'react-bootstrap/Image'
import { CardDeck } from 'react-bootstrap';
import card1 from '../card1.png'
import card2 from '../card2.png'
import card3 from '../card3.png'
import card4 from '../card4.jpg'

import backgroundImage from "../background.jpg"




function App() {
  return (

    <div style={{ backgroundImage: `url(${backgroundImage})` }}>

      <Navbar bg="light" expand="xl">
        <Navbar.Brand href='/'>Jared Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/projects">Past Projects</Nav.Link>
            <Nav.Link href="/future">Future Projects</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
          <Form inline>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron style={{ backgroundImage: `url(${jtbg})`, backgroundSize: 'cover', height: "360px" }}>
        <Container>
          <Image style={{ height: "150px", }} src={Head} roundedCircle />
          <h1 class={"text-light"}>Jared Hunter</h1>
          <h2 class="text-light">Trainee Software Engineer - Service NSW</h2>
        </Container>
      </Jumbotron>

      <CardDeck>

        <Card >
          <CardImg variant='top' src={card2}  />
          <Card.Body>
          <Card.Link href="/about"><h1 style={{textAlignVertical: "center",textAlign: "center",}}>About</h1></Card.Link>
          </Card.Body>

        </Card>

        <Card>
          <Card.Img variant="top" src={card4} />
          <Card.Body>
          <Card.Link href="/projects"><h1 style={{textAlignVertical: "center",textAlign: "center",}}>Projects</h1></Card.Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
          <Card.Link href="/future"><h1 style={{textAlignVertical: "center",textAlign: "center",}}>Whats Next?</h1></Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>



    </div>
  );
}

export default App;
