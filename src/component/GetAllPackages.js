// import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
export default function () {

    const [packDetails, setPackDetails] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        axios.get("http://localhost:8080/allPackage")
            .then((res) => {
                setPackDetails(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
        <center>
       <h2 className="text-centre">All Packages</h2>
      </center>
            <Table striped>
                <thead>
                    <tr>
                        <th>packageid</th>
                        <th>packagename</th>
                        <th>description</th>
                        <th>duration</th>
                        <th>price</th>
                       
                    </tr>
                </thead>
                <tbody>
                {packDetails.map((e) => (
                 <tr key={e.packDetails}>
                  {" "}
                <td>{e.packageid}</td>
                <td>{e.packagename}</td>
                <td>{e.description}</td>
                <td>{e.duration} </td>
               <td>{e.price}</td>
               
                <td>{/* <button className="btn btn-dark"onClick={() => deleteCustomer(e.id)}>Delete</button> */}</td>
            </tr>
          ))}
                </tbody>
            </Table>
        </>
    );

}