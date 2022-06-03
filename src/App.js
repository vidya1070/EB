// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Aboutus from './component/Aboutus'
import Home from './component/Home';
import Navigation from './component/Navigation';
import { Container } from 'react-bootstrap';
import Admin from './component/Admin';
import ErrorPage from './component/ErrorPage';
import Calculator from './component/Calculator';
import CustomerHome from './component/CustomerHome';
import TrainerHome from './component/TrainerHome';
import ManagerHome from './component/ManagerHome';
import MemberRegister from './component/MemberRegister';
import GetAllUsers from './component/GetAllUsers';
import GetAllPackages from './component/GetAllPackages';
import CustomerDetails from './component/CustomerDetails';
import DietHome from './component/DietHome';
import WeightL from './component/WeightL';
import Bbuilding from './component/Bbuilding';
import WeightG from './component/WeightG';
import Profiledemo from './component/Profiledemo';
import GetAllCustomers from './component/GetAllCustomers';

function App() {
  return (
    <div className="App">
      <Container>

        <Router>
          <Navigation />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/Home' element={< Home />}></Route>
            <Route exact path='/Aboutus' element={<Aboutus />}></Route>
            <Route exact path='/Login' element={< Login />}></Route>
            <Route exact path='/Admin' element={< Admin />}></Route>
            <Route exact path='/ErrorPage' element={< ErrorPage />}></Route>
            <Route exact path='/Calculator' element={<Calculator />}></Route>
            <Route exact path='/CustomerHome' element={< CustomerHome />}></Route>
            <Route exact path='/TrainerHome' element={< TrainerHome />}></Route>
            <Route exact path='/ManagerHome' element={<ManagerHome />}></Route>
            <Route exact path='/MemberRegister' element={<MemberRegister />}></Route>
            <Route exact path='/GetAllUsers' element={<GetAllUsers />}></Route>
            <Route exact path='/GetAllPackages' element={<GetAllPackages />}></Route>
            <Route exact path='/CustomerDetails' element={<CustomerDetails />}></Route>
            <Route exact path='/Customer' element={<GetAllCustomers/>}></Route>

            <Route exact path='/DietHome' element={<DietHome />}></Route>
            <Route exact path='/Bbuilding' element={<Bbuilding />}></Route>
            <Route exact path='/WeightL' element={<WeightL />}></Route>
            <Route exact path='/WeightG' element={<WeightG/>}></Route>

            <Route exact path='/profiledemo' element={<Profiledemo/>}></Route>
          </Routes>
        </Router >

      </Container>
    </div >
  );
}

export default App;
