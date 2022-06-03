import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

function Login() {
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [loginResult, setLoginResult] = useState({});

    function handleInput(e) {
        let name = e.target.name;
        let val = e.target.value;
        setLoginData({ ...loginData, [name]: val });
    }
    function login(e) {
        e.preventDefault();
        // alert(JSON.stringify(loginData));
        
        axios.post("http://localhost:8080/loginCheck", loginData).then((response) => {
          
            // alert(JSON.stringify(response.data));
            // console.log(response.data.usertype);
            sessionStorage.setItem('UserInfo',JSON.stringify(response.data));
            setLoginResult(response.data);
            if (response.data.usertype === "admin") 
            {
                navigate("/Admin");
            } else if(response.data.usertype ==="customer")
            {
                navigate("/CustomerHome");
            }
            else if(response.data.usertype ==="manager")
            {
                navigate("/ManagerHome");
            }
            else if(response.data.usertype ==="trainer") {

                navigate("/TrainerHome");
            }
            else{
                navigate("/Login");
            }

            sessionStorage.setItem("UserInfo",JSON.stringify(response.data));
            // alert(response.data.message);
            //  alert(response.data.usertype);
            // alert(e.usertype);

            //  alert(sessionStorage.getItem("UserInfo").usertype);
            // sessionStorage.setItem("customerName", response.data);
          
        });
        // alert(loginResult.usertype);
    }

    const bagdemo={
        backgroundImage:"url('https://img.freepik.com/free-photo/set-sports-attributes_23-2147778577.jpg?w=1380')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <Container>
        <div className="container" style={bagdemo}>
            <div className="row "  >
             
                <div className="offset-md-5 col-md-6 d-grid gap-3 " >
                    <Card style={{ height: '500px',margin:'70px' ,textAlign:'left',padding:'20px' }}>
                        <form onSubmit={login}>
                            <h2 style={{margin:'15px' }}>Login</h2>
                            <div className="form-group mb-3">
                                <label className="text-left"  style={{margin:'10px'}}>UserId</label>
                                <input type="text" className="form-control" placeholder="Enter Email" name="email" id="email" required  value={loginData.email} onChange={handleInput} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" id="password" required value={loginData.password} onChange={handleInput} />
                            </div>

                            <div className="form-group" style={{margin:'10px'}}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block" >Sign in</button>
                            {/* <p className="forgot-password text-right">
                            </p> */}

                            <div className="text-center" style={{margin:'10px'}}>
                                <b>Don't have an account? </b>
                                <Link to="/MemberRegister" className="text-info ">Register Here... </Link>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
        </Container>
    );

}
export default Login;