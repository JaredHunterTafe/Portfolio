import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import placeholder from '../placeholder-image.png'
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardImg from 'react-bootstrap/CardImg'
import card1 from '../card1.png'
import card2 from '../card2.png'
import card3 from '../card3.png'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Figure from 'react-bootstrap/Figure'
import Tabs from 'react-bootstrap/Tabs'
// import Sonnet from 'react-bootstrap/Sonnet'
import Tab from 'react-bootstrap/Tab'
import backgroundImage from "../background.jpg"
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


function Projects() {
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
        <Breadcrumb.Item active>Past Projects</Breadcrumb.Item>
      </Breadcrumb>

      <Accordion style={{ width:'100%', paddingLeft: "400px",paddingRight: "400px"}}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Programming
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" >
                <Tab eventKey="JavaScript" title="JavaScript">
                  <br></br>

                  <h2>Scissors Paper Rock console app</h2>
                  <p>
                    Whilst completing my Certificate IV in software development I had the opportunity to create a console application whilst experimenting with programming and Javascript. I created an application that allowed a user to play “Scissors, Paper, Rock!” against the computer. Whilst this program is quite basic, I feel the concept would be useful in settings such as schools or education facilities as a chance game or where decision making skills are being taught.
                    </p>
                    <a href="https://github.com/JaredHunterTafe/ServiceNSWLesson5/blob/master/WeeklyChallenge2.js">Github code</a>

                  <h2>Currency Converter API console app</h2>
                  <p>
                    Whilst completing my Certificate IV in Software Development, I created a program using Javascript that converts the value of different currencies to different economic values. This project was completed with my peers Annette Brand and Medha Deodhar. The process to make the program work effectively included finding an API and implementing it into the console application. The API had multiple purposes and was crucial in ensuring that the program would work effectively for the user. For example, the API allows the user to convert one currency to another, to see what the Australian Dollar is valued at in other currencies and allows the user to see a list of the current currency rates at the opening of the international markets.
                  </p>

                    <a href="https://github.com/LukeParkerTAFE/console-project-group-4/tree/Saturday">Github code</a>
                </Tab>
                <Tab eventKey="HTML" title="HTML">
                  <br></br>

                  <h2>Scissors Paper Rock HTML website</h2>
                  <br></br>
                  <p>
                    In addition to creating a Console Application that will allow users to play “Scissors, Paper, Rock!” against a computer, I also have created a website using HTML that functions the same way. The design’s purpose was to be a GUI for the “Scissors, Paper, Rock!” console application that was made with Javascript. This project demonstrates my creativity and my ability to use HTML to bring together a website that functions effectively for a client and end user.
                  </p>

                    <a href="https://github.com/JaredHunterTafe/HTML--Assignment">Github code</a>

                </Tab>
                <Tab eventKey="React" title="React">
                  <br></br>

                  <h2>E-toll application form React website </h2>
                  <p>
                    Whilst completing my Certificate IV in Software Design I created an E-Toll application form using the React programming method. Whilst this was a challenging undertaking, I feel that I have designed a basic system that mimics the current E-Toll system being used by Service NSW to assist the community with the purchase of E-Taggs.
                  </p>

                    <a href="https://github.com/JaredHunterTafe/Etoll-Assignment">Github code</a>

                  
                  <h2>Service NSW feedback Form React website</h2>
                  <p>
                    I have also created a feedback form using React designed specifically for Service NSW. This project showcases my ability to design a website that is user-friendly. I have taken the same concept currently being used by Service NSW in the centres, however have added my own design elements and improvements that I feel may make it more user-friendly.
                  </p>

                  <a href="https://github.com/JaredHunterTafe/Feedback-Assignment">Github code</a>

                  <h2>"Community projects" Service NSW React website  </h2>
                  <p>
                    When completing my Certificate IV in Software Development I was given the opportunity to work with my peers Mariam Khoudier and Essa Abouasali to design a Community Projects website to be used by Service NSW. Our outline included designing a website where individuals or community groups within the State of NSW could submit an idea that they feel would improve their local areas and suburbs. We used many of the existing ideas that were currently being used by Service NSW My Community Project page on their website, however added our own design elements that we feel make it more user-friendly for the public. We implemented project management strategies such as Scrum and Agile in order to meet our goals each day and the deadline requested by the “Client”.
                  </p>

                  <a href="https://github.com/essaabouasali/community-project-group3">Github code</a>


                  <br></br>


                </Tab>
              </Tabs>
            </Card.Body>
          </Accordion.Collapse>

        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Non-Programming
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="Podcast" title="Podcast">
                  <br></br>
                  <h2>"Ensmarten Yourself" Podcast</h2>
                  <p>
                  Outside of working for Service NSW I have been involved in the production team for a Comedy Podcast in conjunction with my friend Michael Gunning. I produced, co-wrote and put together 45 episodes using media outlets such as Facebook, Apple Podcasts, OBS as well as professional recording equipment. The podcast required the design of a logo which I assisted with as well as the creation of a “theme song” that was used at the start of each episode. Producing and creating this Podcast has allowed me to showcase my ability to research topics, work in a partnership and team and demonstrate my creativity with sound and visual stimulus. After taking feedback from those that tuned in we were able to create a product that was relatively successful in countries such as Australia, America, the UK and Switzerland. 
                  </p>
                </Tab>
              </Tabs>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>



      {/* <h1>Projects WiP</h1>
      <div>

        <h1>Title</h1>
        <img style={{ float: "right" }} src={placeholder} />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.  </p>

      </div> */}



    </div>
  )
}

export default Projects;
