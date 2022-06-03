import React from "react";
import { Nav, Card, Button, Container } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
export default function TrainerHome()
{
    let user=JSON.parse(sessionStorage.getItem('UserInfo'));

    let navigate = useNavigate();

    const bagdemo2 = {
        backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/68/70/06/1000_F_468700689_LxNpZL5aWLk9Rty2a64XROoz6eoIO67D.jpg')",
        height: '100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        color:'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const logout = () => {
        navigate("/login");
    }

    return(
        <>
        <Container>
        <div className="container" style={bagdemo2}>
        <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                {/* <Nav.Item>
                                    <Nav.Link href="#">View Profile</Nav.Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Nav.Link href="/Customer">View Customers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                                </Nav.Item>
                                <h1 style={{ textAlign: 'right', marginLeft: '300px', color: '#151B8D' }}>Welcome  {user.fname} </h1>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Exercise is king. Nutrition is queen. Put them together and you have got a kingdom.</Card.Title>
                            {/* <Card.Text>
                            Want to feel full when dieting? It may sound like another gimmick for a weight loss regime, 
                            but it’s not. The concept of energy density…
                            </Card.Text> */}
                            {/* <Button variant="primary" style={{ width: '300px' }} >Get Details</Button> */}
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=" height={'250px'} />
                        <Card.Body>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                <pre><b>Name:</b>{user.fname} {user.lname}</pre>
                                <pre><b>Email:</b>{user.email}</pre>
                                <pre><b>Contact No.:</b>{user.contactno}</pre>
                                <pre><b>Address:</b>{user.address}</pre>
                                {/* <pre><b>Gender:</b>{user.gender}</pre> */}
                                <pre><b>DOB:</b>{user.birthdate}</pre>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
        </div>
        </Container>
        </>
    );
}