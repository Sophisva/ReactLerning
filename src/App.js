import logo from './logo.svg';
import './App.css';
import { Header, Context, Footer } from './fn-components';
import MagBox from './component/class-props';
import Banner from './component/banner';
import { Calculator } from './component/caculator';
import { EventObject1 } from './component/event-data';
import Table from './component/table';
import RefsClass from './component/refClass';
import RefsFn from './component/RefsFn';
import RefsArray from './component/refsArray';
import Cart from './component/state-class';
import MessageBox from './component/state-Fn';
import Router1 from './component/router1';
import Router2 from './component/router2';
import Navbar from './component/Navbar';

function App() {
  // return [<Header/>, <Context/>, <Footer/>]
  
  return (
    <>
      {/* <Router2/> */}
      <Navbar/>    
       {/* <Header menu="SP#"/>
      <Context/>
      <Banner/>
      <MagBox 
        text="React & React Native"
        color="blue"
        bgColor="#ccc"
        fontSize="18px"
        border="solid 1px black"  
      />
      <Calculator/>
      <EventObject1/>
      <Table/>
      <RefsClass/>
      <RefsFn/>
      <RefsArray/>
      <Cart/>
      <MessageBox/> */}


      <Footer/>
      
    </>
  )
}

export default App;
