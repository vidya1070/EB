import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Card, Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
export default function ManagerHome() {
    let user = JSON.parse(sessionStorage.getItem('UserInfo'));

    let navigate = useNavigate();
    

    const bagdemo2 = {
        backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design_460848-42.jpg?w=1060')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const logout = () => {
        navigate("/login");
    }

    return (
        <>
            <Container>
                 <div className="container" style={bagdemo2}>
                    
                  {/* <h3 style={{textAligh:'right'}}>Welcome {user.fname}</h3>  */}
                
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#">Manager</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/GetAllPackages">Packages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                            </Nav.Item>
                            <h1 style={{textAlign:'right',marginLeft:'300px',color:'#151B8D'}}>Manager Page</h1>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Take care of your body. It's the only place you have to live.</Card.Title>
                        <Card.Text>
                        At THE GYM, our mission is to provide you with the ultimate fitness experience and invigorates your soul.
                        </Card.Text>
                        {/* <Button variant="primary" style={{width:'300px'}} onClick ={demonav}>Get Details</Button> */}
                    </Card.Body>
                </Card>
                </div>
            </Container>
        </>

    );
}