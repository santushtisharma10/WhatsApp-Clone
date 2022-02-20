//import './App.css';
import SideComponent from './components/SideComponent';
import ChatComponent from './components/ChatComponent';
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <div className='app__navbar'>
       <a href="#" title="Image from freeiconspng.com">
        
         <img 
         className="app__navbar-logo"
         height="75vh"
         src="https://www.freeiconspng.com/uploads/logo-whatsapp-png-pic-0.png" alt="Logo Whatsapp PNG Pic" />
         </a>
         </div>
      
     {/* <div className='WhatsApp'> */}
     {/* <SideComponent /> */}
     {/* <ChatComponent /> */}
     {/* </div> */}
     <Home />

    </div>
  );
}

export default App;
