import React from "react";
import { Card, Container } from "react-bootstrap";
export default function Profiledemo()
{
    let user = JSON.parse(sessionStorage.getItem('UserInfo'));
   
    return(
        <>
        <Container>
        <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height={'250px'} />
             <Card.Body>
                 <Card.Title>Profile</Card.Title>
                 <Card.Text>
                     <pre><b>Name:</b>{user.fname} {user.lname}</pre>
                     <pre><b>Email:</b>{user.email}</pre>
                     <pre><b>Contact No.:</b>{user.contactno}</pre>
                     <pre><b>Address:</b>{user.address}</pre>
                     {/* <pre><b>Gender:</b>{user.gender}</pre> */}
                     <pre><b>DOB:</b>{user.birthdate}</pre>
                     <h5>Your Trainer:sahil pathan</h5>
                 </Card.Text>
                 {/* <Button variant="primary">Go somewhere</Button> */}
             </Card.Body>
         </Card>
         </Container>
        </>
    );
}