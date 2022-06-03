import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function CustomerDetails() {
    const [userid, setUserId] = useState();
    const [joindate, setJoindate] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [medicalhistory, setMedicalhistory] = useState();
    const [gympackage, setGympackage] = useState("Select Gympackage");
    
    
    const navigate = useNavigate();

       const submitInfo = (e) => {
        // e.preventDefault();
        const requestOptions = {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userid,
                joindate: joindate,
                height: height,
                weight: weight,
                medicalhistory: medicalhistory,
                gympackage: gympackage,
                
            })
            
        };
        fetch("http://localhost:8080/insertCustDetail", requestOptions)
            .then(resm => resm.json())
            // .then(data => setMember(data))
        alert("Data Save Successfull!");
        navigate("/Login");
    }

    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //    this.props.history.push('/dashboard')
    //   }
    

        return (
            <Container>
                <div class="col" style={{  backgroundImage:"url('https://img.freepik.com/free-photo/top-view-weights-with-apple-sneakers_23-2148523259.jpg?w=1380')",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',color:'white',height:'100vh'}}>

                    <div class=" col-xl-6 " style={{color:'white', textAlign: 'left'}}>
                        <div class="card-body p-md-3 text-black">
                            <h3 class="mb-2 text-uppercase" style={{ textAlign: 'center' }}> Registration form</h3>

                            <form onSubmit={submitInfo}>

                                <lable>Enter UserId: </lable>
                                <input type="number" class="form-control form-control-lg" value={userid} onChange={(event) => { setUserId(event.target.value) }} />

                                <lable>Enter Height: </lable>
                                <input type="text" class="form-control form-control-lg" value={height} onChange={(event) => { setHeight(event.target.value) }} />

                                <lable>Enter Weight </lable>
                                <input type="text" class="form-control form-control-lg" value={weight} onChange={(event) => { setWeight(event.target.value) }} />

                                <lable>Enter Medical History: </lable>
                                <input type="text" class="form-control form-control-lg" value={medicalhistory} onChange={(event) => { setMedicalhistory(event.target.value)}} />

                                
                                <lable>Enter Joindate: </lable>
                                <input type="date" class="form-control form-control-lg" value={joindate} onChange={(event) => { setJoindate(event.target.value) }}
                                    dateformat='yyyy-mm-dd' />
                                <form onSubmit={gympackage}>
                                    <lable>
                                        Select usertype:
                                        <select value={gympackage} onChange={(event) => { setGympackage(event.target.value) }}>
                                            <option value="select Gympackage">select Package</option>
                                            <option value="Weightloss">Weight Loss</option>
                                            <option value="weightgain">Weight Gain</option>
                                            <option value="bodybuilding">Body Building</option>
                                        </select>
                                    </lable>
                                </form>
                                <div class="d-flex justify-content-end pt-3">
                                    <button type="reset" class="btn btn-danger btn-lg">Reset all</button>
                                    <button type="submit" class="btn btn-success btn-lg ms-2" onClick={submitInfo}>Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        )
}
export default CustomerDetails;


