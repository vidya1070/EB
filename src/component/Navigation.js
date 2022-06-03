import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap'
function Navigation() {

  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark" className="justify-content-end">


          {/* <Navbar.Brand href="/Home">Home</Navbar.Brand>
         <Navbar.Brand href="#home">
             <img
              src="https://as2.ftcdn.net/v2/jpg/03/65/88/15/1000_F_365881544_WCxtis2kSxTqRUKAnwor9OGTSf3IE2hb.jpg"
             width="110"
             height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
            <p>FitHit Gym</p>
          </Navbar.Brand> 
           <Link to="/" className="navbar-brand" id="m"><h1>FitHit Gym</h1></Link>  */}

          <Nav className="me-auto mr-10" style={{ marginLeft: '20px' }}>       
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Aboutus">AboutUs</Nav.Link>
            <Nav.Link href="/DietHome">Diet Plan</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Calculator">BMR</Nav.Link>
          </Nav>

        </Navbar>
      </Container>
    </>
  );

}
export default Navigation;