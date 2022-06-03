import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Card, Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
// import GetAllUsers from "./GetAllUsers";
export default function Admin()
 {
    let user = JSON.parse(sessionStorage.getItem('UserInfo'));
    let navigate = useNavigate();
    const demonav=()=>{
     navigate('/GetAllUsers');
        // <GetAllUsers/>
    }
    
    const bagdemo2 = {
        backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-modern-loft-gym-fitness_105762-2020.jpg?t=st=1649397747~exp=1649398347~hmac=1927bfd0b319636006bd2ff62217124919803f6e9d22604a72a7f2db8cf2daf5&w=1060')",
        height: '100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
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
                                <Nav.Link href="/GetAllUsers">User</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/GetAllPackages">Packages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                            </Nav.Item>
                            <h1 style={{textAlign:'right',marginLeft:'300px',color:'#151B8D'}}>Admin Page</h1>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Take care of your body. It's the only place you have to live.</Card.Title>
                        <Card.Text>
                        At THE GYM, our mission is to provide you with the ultimate fitness experience and invigorates your soul.
                        </Card.Text>
                        <Button variant="primary" style={{width:'300px'}} onClick ={demonav}>Get Details</Button>
                    </Card.Body>
                </Card>
                </div>
            </Container>
        </>
    );
}