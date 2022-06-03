import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function MemberRegister() {
    const [regResult, setregResult] = useState({});
    const [userid, setUserId] = useState();
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contactno, setContactNo] = useState();
    const [address, setAddress] = useState();
    const [gender, setGender] = useState();
    const [usertype, setUserType] = useState("Select usertype");
    const [birthdate, setBirthdate] = useState();
    const [member, setMember] = useState({});
    const navigate = useNavigate();

    const submitInfo = (e) => {

        e.preventDefault();
        const requestOptions = {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userid,
                fname: firstname,
                lname: lastname,
                email: email,
                password: password,
                gender: gender,
                contactno: contactno,
                usertype: usertype,
                address: address,
                birthdate: birthdate,
            })

        };

        fetch("http://localhost:8080/registration", requestOptions)
            .then(resm => resm.json())
        // .then(data => alert(JSON.stringify(data)))
        setMember(requestOptions.data);
        alert("Data Save Successfully!");
        //alert(userid);
        if (usertype == "customer") {
            navigate("/CustomerDetails");
        }
        else {
            navigate("/Login");
        }
    }


    return (
        <Container>
            <div class="col" style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/top-view-weights-with-apple-sneakers_23-2148523259.jpg?w=1380')", backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', color: 'white'
            }}>

                <div class=" col-xl-6 " style={{ color: 'white', textAlign: 'left' }}>
                    <div class="card-body p-md-3 text-black">
                        <h3 class="mb-2 text-uppercase" style={{ textAlign: 'center' }}> Registration form</h3>

                        <form onSubmit={submitInfo}>

                            <lable>Enter Firstname: </lable>
                            <input type="text" class="form-control form-control-lg" required value={firstname} onChange={(event) => { setFirstName(event.target.value) }} />

                            <lable>Enter Lastname </lable>
                            <input type="text" class="form-control form-control-lg" required value={lastname} onChange={(event) => { setLastName(event.target.value) }} />

                            <lable>Enter Email: </lable>
                            <input type="text" class="form-control form-control-lg" required value={email} onChange={(event) => { setEmail(event.target.value) }} />

                            <lable>Enter Password: </lable>
                            <input type="password" class="form-control form-control-lg" required value={password} onChange={(event) => { setPassword(event.target.value) }} />

                            <lable>Enter Contact no: </lable>
                            <input type="text" class="form-control form-control-lg" required value={contactno} onChange={(event) => { setContactNo(event.target.value) }} />

                            <label htmlFor="gender">Gender</label><br></br>
                            <div className="form-check form-check-inline rd">
                                <input required className="form-check-input" type="radio" id="Male" name="gender" value="Male" onChange={(event) => { setGender(event.target.value) }} />
                                <label className="form-check-label" htmlFor="Male">Male</label><br></br>

                                <input required className="form-check-input" type="radio" id="Female" name="gender" value="Female" onChange={(event) => { setGender(event.target.value) }} />
                                <label className="form-check-label" htmlFor="Female">Female</label>
                            </div>
                            <div className="form-check form-check-inline rd">
                            </div>
                            <br></br>
                            <lable>Enter Address </lable>
                            <input type="text" class="form-control form-control-lg" value={address} onChange={(event) => { setAddress(event.target.value) }} />
                            <lable>Enter Birthdate: </lable>
                            <input type="date" class="form-control form-control-lg" value={birthdate} onChange={(event) => { setBirthdate(event.target.value) }}
                                dateformat='yyyy-mm-dd' />
                            <form onSubmit={usertype}>
                                <lable>
                                    Select usertype:
                                    <select value={usertype} onChange={(event) => { setUserType(event.target.value) }}>
                                        <option value="select usertype">select usertype</option>
                                        <option value="customer">Customer</option>
                                        <option value="trainer">Trainer</option>
                                        <option value="manager">Manager</option>
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
export default MemberRegister;


