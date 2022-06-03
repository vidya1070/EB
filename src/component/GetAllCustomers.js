// import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
export default function GetAllCustomers () {

    const [UserDetails, setUserDetails] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        axios.get("http://localhost:8080/getallcustomer")
            .then((res) => {
                setUserDetails(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
        <center>
       <h2 className="text-centre">Customers Details</h2>
      </center>
            <Table striped>
                <thead>
                    <tr>
                        <th>Userid</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        {/* <th>User Type</th> */}
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                {UserDetails.map((e) => (
                 <tr key={e.UserDetails}>
                  {" "}
                <td>{e.userid}</td>
                <td>{e.fname}</td>
                <td>{e.lname}</td>
                <td>{e.email} </td>
               <td>{e.contactno}</td>
                {/* <td>{e.usertype} </td> */}
                <td>{e.address}</td>
                <td>{e.gender}</td>
                <td>{e.birthdate} </td>
                <td>{/* <button className="btn btn-dark"onClick={() => deleteCustomer(e.id)}>Delete</button> */}</td>
            </tr>
          ))}
                </tbody>
            </Table>
        </>
    );

}