import React from 'react';
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
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import backgroundImage from "../background.jpg"

  

function About() {
    return (
        <div>
        
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

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
<div >
            <h1 style={{ textAlignVertical: "center", width: '100%', paddingLeft: "400px", paddingRight: "400px" }} >About Me</h1>
            {/* <img style={{ float: "left", align: 'top', width:'500px' }} src={placeholder}  /> */}

            <p style={{ textAlignVertical: "center", width: '100%', paddingLeft: "400px", paddingRight: "400px" }}>
                Since completing my Higher School Certificate in 2012 I have been heavily involved in working for the NSW Government and the NSW public. In 2012 I completed my Certificate III In Business that provided me with the skills that I needed to effectively serve the NSW public at the RTA, Roads and Maritimes Services and Service NSW. I have been involved in management and front facing roles and have enjoyed the experiences that these have offered me.
                <br />
                <br />

                I have always been interested in computers, design and Software and aspired to work in this field since I was in school. I have since completed my Certificate IV in Software Design through Service NSW and hope to continue working in this space and serving the NSW community.
                <br />
                <br />

                In my spare-time I am involved in many volunteer organisations, and assist my local church with their Sound and Technology systems. During COVID-19 restrictions I taught myself how to effectively live stream the service to the church community and assisted the Minister with the 9:30am and 5:00pm services. I have a basic understanding on how to use audio technology for showcasing live music, presentations and meetings and have been involved in the process to bring these settings to social media platforms such as Zoom and Facebook.
                <br />
                <br />

                I aspire to work in Software design and hope to continue my career with the NSW government by bringing quality programs that are user-friendly to the border community that will assist Service NSW with their customer service and community goals.

                <br />

            </p>
            </div>


            {/* <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/23844592_10213235085725937_5058365213634611597_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=17RXD-YeRTsAX_TDr6-&_nc_ht=scontent-syd2-1.xx&oh=5a0447304ae67079eaef82c6ab114b85&oe=5F46E71A" />


                    </Col>
                    <Row xs={6} md={4}>
                        <h1>birth?</h1>
                    </Row>

                </Row>
            </Container> */}
        </div>
    )
}

export default About
