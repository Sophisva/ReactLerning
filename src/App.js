// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header, Context, Footer } from './fn-components';
import MagBox from './component/class-props';
// import Banner from './component/banner';
// import { Calculator } from './component/caculator';
// import { EventObject1 } from './component/event-data';
// import Table from './component/table';
// import RefsClass from './component/refClass';
// import RefsFn from './component/RefsFn';
// import RefsArray from './component/refsArray';
// import Cart from './component/state-class';
// import MessageBox from './component/state-Fn';
// import Router1 from './component/router1';
// import Router2 from './component/router2';
// import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './component/NoPage';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';

function App() {

  const [isSignUp, setIsSignUp] = useState(true);

  const handleSwitch = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  
  return (
    <div >
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
                                  <div className='mt-5 mx-5'>
                                    <div>
                                      <button onClick={handleSwitch} className='btn btn-success'>
                                        {isSignUp ? 'Sign Up' : 'Sign In'}
                                      </button>
                                    </div>
                                    {isSignUp ? <Signin/> : <Signup/>}
                                  </div>
                                }
        />
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/magbox' element={<MagBox/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
          
      <Footer/>
    </BrowserRouter>
    </div>

  )
}

export default App;
