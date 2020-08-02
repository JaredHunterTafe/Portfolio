import React from 'react';
import Table from 'react-bootstrap/Table'

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
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import backgroundImage from "../background.jpg"


function Future() {
    return (
        <div >
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
                <Breadcrumb.Item active>Future projects</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ textAlignVertical: "center", width: '100%', paddingLeft: "400px", paddingRight: "400px"}} >

                <h1>The Now</h1>

                <p>
                I am currently working for the NSW government at Service NSW and am looking forward to the opportunity to collaborate with my team members on future Software, Information Technology and Website design projects. I hope to keep contributing in this area to create programs that assist the broader NSW public with their community, transportation and family service needs.
                <br></br>
                <br></br>
                I hope to continue developing my skills in Software Design and Information technology by continuing my study in this field. I would like to enhance upon the knowledge I have gained through the Certificate IV in Software Design and continue my training so that I can further assist my colleagues and the NSW government in bringing quality programs that are useful internally and externally. I also would like to broaden my understanding about Cyber Security and Internet law.
                </p>

                <h1>The Plan </h1>

                <p>
                It is my goal to continue with my traineeship once completed and potentially upgrade my current Certificate IV to a Diploma. I would also like to continue to study different coding languages as I feel that this would be useful for future designs and programs that Service NSW may require.
                </p>

                <h1>The Goal</h1>

                <p>
                Whilst I enjoy programming, it is my goal to be involved in a team that focuses on design as I enjoy showcasing my creativity.
                </p>

            </div>
        </div>
    )
}

export default Future;
