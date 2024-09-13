import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import Test from './components/monday/test';
// import Home from './week7/components/tuesday/props/Home';
// import Home from './week7/components/tuesday/onClickEvents/Home';
import Home from './components/week 7/tuesday/useState/Home';
// import NavBar4 from './week7/components/tuesday/assignment/NavBar4'
import Header2 from './components/week 7/tuesday/assignment/Header2'
// import Footer3 from './week7/components/tuesday/assignment/Footer3'
// import ApiCalls from './week7/components/wednesday/ApiCalls';
// import ApiCalls from './components/week 7/wednesday/ApiCalls';
// import Parent from './week7/components/thursday/Parent';
// import Login from './components/week8/monday/Login';
// import Mapping1 from './components/week8/monday/Mapping1';
// import Mapping2 from './components/week8/monday/Mapping2';
// import Mapping3 from './components/week8/monday/Mapping3';
// import ProductLogic from './components/week8/monday/assignment/ProductLogic';
// import Form from './components/week8/tuesday/Form';
import PropParent from './components/week 9/PropParent';
import AxiosRequests from './components/week 10/AxiosRequests';


function App() {
  return (
    <Router>
      <div className='vh-100 vw-100'>
      <NavBar4 />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<AxiosRequests />} /> */}
          {/* <Route path='/PropParent' element={<PropParent />}/> */}
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;












        {/* <Test /> */}
        {/* <Home /> */}
        
        {/* <Header2 /> */}
        {/* <Footer3 /> */}
        {/* <ApiCalls /> */}
        {/* <Parent /> */}
        {/* <Login /> */}
        {/* <Mapping1/> */}
        {/* <Mapping2 /> */}
        {/* <Mapping3 /> */}
        {/* <ProductLogic /> */}
        {/* <Route path='/form' element={<Form/>}/> */}