import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Nav, Card, Button, Container } from "react-bootstrap";
import Profiledemo from "./Profiledemo";

export default function CustomerHome() {
    let user = JSON.parse(sessionStorage.getItem('UserInfo'));
    let navigate = useNavigate();
    const [Trainerall, setTrainerall]=useState("No trainer Allocated.");
    

    const Logout = () => {
        sessionStorage.clear();
        alert("Do you Want to Logout!");
        navigate("/Login")
    }

    const [CustDetails, setCustDetails] = useState([]);
    const uid=user.userid;
    
    useEffect(() => {
        getCustmer();
    //    getTrainer();
    }, []);

    const getCustmer = () => {
        // alert(user.userid);
        axios.get("http://localhost:8080/getCustDetail/"+uid)
            .then((res) => {
                setCustDetails(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const bagdemo1 = {
        backgroundImage: "url('https://img.freepik.com/free-photo/set-healthy-lifestyle-objects_23-2148241582.jpg?t=st=1649394771~exp=1649395371~hmac=d576c4fa3152e76371d3c882e2331f6d373f867ffbfb9f7d98f27a3bc8f629e7&w=1060')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    // const getTrainer=()=>{

    //     if(CustDetails.gympackage=='weight loss')
    //     {
    //         setTrainerall:'Satya Tiwari';
    //         // Trainerall:'Satya Tiwari';
    //     }
    //     else if(CustDetails.gympackage=='weight gain')
    //     {
    //         setTrainerall('Samira Pandey');
    //         // Trainerall:'Samira Pandey';
    //     }
    //     else
    //     {
    //      setTrainerall('Sahil Pathan');
    //         //  Trainerall:'Sahil Pathan';
    //     }
    // }
    // alert(CustDetails.gympackage);
   

    const demo = () => {
        navigate("/profiledemo")
    }

    return (
        <>
            <Container>
                <div className="container" style={bagdemo1}>
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                               
                                <Nav.Item>
                                    <Nav.Link onClick={Logout}>Logout</Nav.Link>
                                </Nav.Item>
                                <h1 style={{ textAlign: 'right', marginLeft: '300px', color: '#151B8D' }}>Welcome  {user.fname}  </h1>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Exercise and rest are the cornerstones of improving your quality of life.</Card.Title>
                            <Card.Text>
                                “Healthy happens when you go from Self-conscious to Self-crush.”
                                How often do you tell yourself I love you? Do you smile when you look…
                            </Card.Text>
                            <Button variant="primary" style={{ width: '300px' }} onClick={demo}  >Get Details</Button>
                        </Card.Body>
                    </Card>
                    <div className="row col-md-12">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height={'250px'} />
                            <Card.Body>
                                <Card.Title>Profile</Card.Title>
                                <Card.Text>
                                <pre><b>Uid:</b>{user.userid}</pre>
                                    <pre><b>Name:</b>{user.fname} {user.lname}</pre>
                                    <pre><b>Email:</b>{user.email}</pre>
                                    <pre><b>Contact No.:</b>{user.contactno}</pre>
                                    <pre><b>Address:</b>{user.address}</pre>
                                    {/* <pre><b>Gender:</b>{user.gender}</pre> */}
                                    <pre><b>DOB:</b>{user.birthdate}</pre>
                                    <h5>Your Trainer:sahil pathan</h5>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                       <Card style={{ width: '22rem', marginLeft: '30px', textAlign: "left" }}>
                            <Card.Body>
                                <Card.Title>Detailed Info</Card.Title>
                                <Card.Text>
                                    <pre><b>UserId:{CustDetails.userid}</b></pre>
                                    <pre><b>Package:{CustDetails.gympackage}</b></pre>
                                    <pre><b>Joining Date:{CustDetails.joindate}</b></pre>
                                    <pre><b>height:{CustDetails.height}</b></pre>
                                    <pre><b>Weight:{CustDetails.weight}</b></pre>
                                    <pre><b>History:{CustDetails.medicalhistory}</b></pre>
                                    {/* <pre><b>Your Trainer is:{Trainerall}</b></pre> */}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                    </div>
                </div>
           </Container>
        </>
    );
}